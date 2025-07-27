import React, { useState, useEffect } from 'react';
import Container from '../container/Container';
import Service from '../../appwrite/conf';
import PostCard from '../PostCard';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);
  const location = useLocation(); // This gives you access to the location object, which contains information about the current route

  const fetchPosts = () => {
    if (userData?.$id) {
      Service.getPosts(userData.$id).then((res) => {
        if (res) setPosts(res.documents);
      });
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [userData]);

  useEffect(() => {
    if (location.state?.refresh) {
      fetchPosts(); // ✅ Trigger refresh if navigated with state
    }
  }, [location]);

  
  return (
    <div className='w-full py-8'>
      <Container>
        <h2 className="text-2xl font-bold mb-4">My Posts</h2>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
