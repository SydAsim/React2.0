import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, RTE } from '../index';
import Service from '../../appwrite/conf';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Select from '../Select';

const PostForm = ({ post }) => {
  const {
    register, // Binds an input field to the form state and adds validation
    handleSubmit, // Wraps your submit function and gives it validated data
    watch, // Watches for field changes in real time
    setValue, //Programmatically set a value in the form
    control, //Used for integrating custom components (like RTE or Select)
    getValues, //Gets the current value of a form field
  } = useForm({
    defaultValues: {
      title: post?.title || '', // If post?.title exists (i.e., if editing an existing post), use it. Otherwise, default to ''.
      slug: post?.slug || post?.$id || '',
      content: post?.content || '',
      status: post?.status || 'active',
    },
  });


const userData = useSelector((state) => state.auth.userData);
const navigate = useNavigate();

  console.log("✅ Redux userData:", userData);

  useEffect(() => {
  if (userData === undefined) return; // wait until it's determined
  if (!userData) {
    navigate('/login');
  }
}, [userData, navigate]);


  const submit = async (data) => {
    try {
      if (post) {
        // UPDATE logic
        const file = data.image?.[0] ? await Service.uploadFile(data.image[0]) : null;

        if (file && post.featuredImage) {
          await Service.deleteFile(post.featuredImage);
        }

        const dbPost = await Service.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });

        if (dbPost && dbPost.$id) {
          navigate(`/post/${dbPost.$id}`);
        } else {
          console.error("🔴 Update failed");
        }

      } else {
        // CREATE logic
        const file = await Service.uploadFile(data.image[0]);
        if (!file || !file.$id) throw new Error("File upload failed");

        const dbPost = await Service.createPost({
          ...data,
          featuredImage: file.$id,
          userid: userData?.$id, // ✅ Correct field name
        });

        console.log("✅ Creating post with user ID:", userData?.$id);

        if (dbPost && dbPost.$id) {
          navigate('/all-posts');
        } else {
          console.error("🔴 Post creation failed");
        }
      }
    } catch (error) {
      console.error("❌ PostForm submit error:", error.message);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string') {
      return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    }
    return '';
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register('title', { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register('slug', { required: true })}
          onInput={(e) =>
            setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true })
          }
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues('content')}
        />
      </div>

      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register('image', { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={Service.getFilePreview(post.featuredimage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={['active', 'inactive']}
          label="Status"
          className="mb-4"
          {...register('status', { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? 'bg-green-500' : undefined}
          className="w-full"
        >
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
