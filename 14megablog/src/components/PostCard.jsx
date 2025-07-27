import React from 'react'
import Service from '../appwrite/conf'
import { Link } from 'react-router-dom'

const PostCard = ({ $id, title, featuredimage }) => {
  console.log("PostCard featuredimage:", featuredimage); // ✅ PASTE HERE
  console.log("Preview URL:", Service.getFilePreview(featuredimage));


  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full rounded-xl bg-gray-100 p-4'>
        <div className='w-full flex justify-center mb-4'>
          {
            featuredimage ? (
              <img
                src={Service.getFilePreview(featuredimage)}
                alt={title}
                className='rounded-xl'
              />
            ) : (
              <div className='text-gray-400 italic'>No image uploaded</div>
            )
          }
        </div>

        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
