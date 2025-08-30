import React, { useState } from 'react';
import { dummyUserData } from '../assets/assets';
import { Image, X } from 'lucide-react';
import toast from 'react-hot-toast'

const CreatePost = () => {

  const [content, setContent] = useState("")
  const [contentRows, setContextRows] = useState(2)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {

  }

  const user = dummyUserData

  return (
    <div className='create-post h-full bg-gradient-to-b from-slate-50 to-white overflow-y-auto'>
      <div className='max-w-6xl mx-auto p-6'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-slate-900 mb-2'>Create Post</h1>
          <p className='text-slate-600'>Share you profound thoughts on you Nest</p>
        </div>

        <div className='max-w-xl bg-white p-4 sm:p-8 sm:pb-3 rounded-xl shadow-md space-y-4'>
          <div className='flex items-center gap-3'>
            <img src={user.profile_picture} className='w-12 h-12 rounded-full shadow' alt="" />
            <div>
              <h2 className='font-semibold'>{user.full_name}</h2>
              <p className='text-sm text-gray-500'>@{user.username}</p>
            </div>
          </div>

            <textarea className='w-full resize-none mt-4 text-sm outline-none placeholder-gray-400' placeholder="What's happening?" onChange={e => {setContent(e.currentTarget.value); console.log(e.target.scrollHeight, " ", e.target.clientHeight);   setContextRows(e.currentTarget.scrollHeight * e.currentTarget.rows / e.currentTarget.clientHeight)}} value={content} rows={Math.min(5, contentRows)} />

            {images.length > 0 && (
              <div className='flex flex-wrap gap-2 mt-4'>
                {images.map((image, i)=> (
                  <div key={i} className='relative group'>
                    <img src={URL.createObjectURL(image)} className='h-20 rounded-md' alt="" />
                    <div onClick={() => setImages(images.filter((_, index) => index !== i))} className='absolute hidden group-hover:flex justify-center items-center top-0 right-0 bottom-0 left-0 bg-black/40 rounded-md cursor-pointer'>
                      <X className='w-6 h-6 text-white' />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className='flex items-center justify-between pt-3 border-t border-gray-300'>
              <label htmlFor="images" className='flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer'>
                <Image className='w-6 h-6' />
              </label>
              <input type="file" id='images' accept='image/*' hidden multiple onChange={(e => setImages([...images, ...e.currentTarget.files]))} />

              <button disabled={loading} onClick={() => toast.promise(
                handleSubmit(), 
                {
                  loading: "Uploading...",
                  success: <p>Post Added</p>,
                  error: <p>Post Not Added</p>
                }
              )} className='text-sm bg-gradient-to-r from-initial to-final hover:from-initial-light hover:to-final-light active:scale-95 transition text-white font-medium px-8 py-2 rounded-md'>Publish Post</button>

            </div>

        </div>
      </div>
    </div>
  );
};

export default CreatePost;
