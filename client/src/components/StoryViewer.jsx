import React from 'react'

const StoryViewer = ({ viewStory, setViewStory }) => {
  return (
    <div className='fixed inset-0 h-screen bg-opacity-90 z-110 flex items-center justify-center bg-primary'>
      <div className='absolute top-0 left-0 w-full h-1 bg-gray-700'>
        <div className='h-full bg-white transition-all linear' style={{width: "50"}}></div>
      </div>

      <div className='absolute top-4 left-4 flex items-center space-x-3 p-2 px-4 sm:p-4 sm:px-8 backdrop-blur-2xl rounded bg-black/50'>
        <img src={viewStory.user?.profile_picture} className='size-' alt="" />
      </div>
    </div>
  )
}

export default StoryViewer
