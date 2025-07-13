import React from 'react'
import Service  from '../appwrite/conf'
import {link} from 'react-router-dom'

const PostCard = ({$id , title , featuredImage }) => {

  return (
    <link to={`/post/${id}`}>
        <div className=' w-full rounded-xl bg-gray-100 p-4'>
            <div className='w-full flex justify-center mb-4'>

                <img src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className='rounded-xl' />

            </div>

            <h2
            className='text-xl font-bold'
            >{title}</h2>

        </div>

    </link>
  )
}

export default PostCard