import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'
import { Pencil } from 'lucide-react';

const ProfileModel = ({ setShowEdit }) => {

    const user = dummyUserData;
    const [editForm, setEditForm] = useState({
        username: user.username,
        bio: user.bio,
        location: user.location,
        profile_picture: null,
        cover_photo: null,
        full_name: user.full_name,
    })

    const handleSaveProfile = async (e) => {
        e.preventDefault()
    }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-110 h-screen overflow-y-scroll bg-black/50'>
        <div className='max-w-2xl sm:py-6 mx-auto'>
            <div className='bg-white rounded-lg shadow p-6'>
                <h1 className='text-2xl font-bold text-gray-900 mb-6'>Edit Profile</h1>
                <form className='space-y-4' onSubmit={handleSaveProfile}>
                    <div className='flex flex-col items-start gap-3'>
                        <label htmlFor="profile_picture" className='block text-sm font-medium text-gray-700 mb-1 cursor-pointer'>
                            Profile Picture
                            <input type="file" accept='image/*' id="profile_picture" className='w-full p-3 border border-gray-200 rounded-lg' onChange={e => setEditForm({...editForm, profile_picture: e.target.files[0]})} hidden />
                            <div className='group relative'>
                                <img src={editForm.profile_picture ? URL.createObjectURL(editForm.profile_picture): user.profile_picture} className='w-24 h-24 rounded-full object-cover mt-2' alt="" />
                                <div className='absolute hidden group-hover:flex top-0 left-0 bottom-0 right-0 bg-black/20 rounded-full items-center justify-center'>
                                    <Pencil className='w-5 h-5 text-white' />
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className='flex flex-col items-start gap-3'>
                        <label htmlFor="cover_photo" className='block text-sm font-medium text-gray-700 mb-1'>
                            Cover Photo
                            <input type="file" accept='image/*' id="cover_photo" className='w-full p-3 border border-gray-200 rounded-lg' onChange={e => setEditForm({...editForm, cover_photo: e.target.files[0]})} hidden />
                            <div className='group relative cursor-pointer'>
                                <img src={editForm.cover_photo ? URL.createObjectURL(editForm.cover_photo) : user.cover_photo} className='w-80 h-40 rounded-lg bg-gradient-to-r from-initial/20 via-purple-600/20 to-final/20 object-cover' />
                                <div className='absolute hidden group-hover:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-lg items-center justify-center'>
                                    <Pencil className='w-5 h-5 text-white' />
                                </div>
                            </div>
                        </label>
                    </div>


                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
                        <input type="text" className='w-full p-3 border border-gray-200 rounded-lg' placeholder='Enter Your Full Name' onChange={e => setEditForm({...editForm, full_name: e.target.value})} value={editForm.full_name} />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Username</label>
                        <input type="text" className='w-full p-3 border border-gray-200 rounded-lg' placeholder='Enter a Valid Username' onChange={e => setEditForm({...editForm, username: e.target.value})} value={editForm.username} />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Bio</label>
                        <textarea rows={3} className='w-full p-3 border border-gray-200 rounded-lg resize-none' placeholder='Write a few words about yourself' onChange={e => setEditForm({...editForm, bio: e.target.value})} value={editForm.bio} />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Location</label>
                        <input type="text" className='w-full p-3 border border-gray-200 rounded-lg' placeholder='Enter Your Location' onChange={e => setEditForm({...editForm, location: e.target.value})} value={editForm.location} />
                    </div>

                    <div className='flex justify-end space-x-3 pt-6'>
                        <button onClick={() => setShowEdit(false)} type='button' className='px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transiton-colors'>Cancel</button>
                        <button type='submit' className='px-4 py-2 bg-gradient-to-r from-initial to-final text-white rounded-lg hover:from-initial-light hover:to-final-light transition'>Save Changes</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default ProfileModel
