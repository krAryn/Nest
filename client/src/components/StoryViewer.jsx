import { BadgeCheck, X } from 'lucide-react'
import React, { useEffect, useState, useRef } from 'react'

const StoryViewer = ({ viewStory, setViewStory }) => {

  const videoRef = useRef()
  const progressBarRef = useRef()

  useEffect(() => {
    if (viewStory.media_type !== "video") {
      const STORY_DURATION = 10000
      const SEEK = 300
      let timeElapsed = 0

      const progressInterval = setInterval(() => {
        if (timeElapsed === STORY_DURATION) {
          setViewStory(false)
        } else {
          timeElapsed += SEEK
          progressBarRef.current.style.width = `${(timeElapsed/STORY_DURATION) * 100}%`
        }
      }, SEEK)

      return () => {
        clearInterval(progressInterval)
      }
    } else {

      let STORY_DURATION
      videoRef.current.onloadedmetadata = () => {
        STORY_DURATION = videoRef.current.duration
      }

      videoRef.current.ontimeupdate = (e) => {
        progressBarRef.current.style.width = `${(e.currentTarget.currentTime / STORY_DURATION) * 100}%`
      }
    }


  }, [])

  const handleClose = () => {
    setViewStory(null)
  }

  const RenderContent = () => {
    if (viewStory.media_type === "image") {
      return (
        <img 
        src={viewStory.media_url} 
        className='max-w-full max-h-screen object-contain ' 
        alt="" />
      )
    } else if (viewStory.media_type === "video") {
      return (
        <video ref={videoRef} 
        onEnded={() => setViewStory(null)} 
        src={viewStory.media_url} 
        className='max-h-screen' 
        onMouseDown={e => e.currentTarget.pause()}
        onMouseUp={e => e.currentTarget.play()}
        autoPlay />
      )
    } else if (viewStory.media_type === "text") {
      return (
        <div className='w-full h-full flex items-center justify-center text-center text-white text-2xl p-8'>
          {viewStory.content}
        </div>
      )

    } else {
      return null
    }
  }

  return (
    <div className='fixed inset-0 h-screen bg-opacity-90 flex items-center justify-center bg-primary z-300 select-none'
    onDoubleClick={() => setViewStory(false)}>
      {/* Progress Bar */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gray-700'>
        <div ref={progressBarRef} className='progress-bar h-full bg-white transition-all' style={{ width: "0" }}></div>
      </div>


      <div className='absolute top-4 left-4 flex items-center space-x-3 p-2 px-4 sm:p-4 sm:px-8 backdrop-blur-2xl rounded bg-black/50'>
        <img src={viewStory.user?.profile_picture} className='size-7 zm:size-8 rounded-full object-cover border border-white' alt="" />
        <div className='text-white font-medium flex items-center gap-1.5'>
          <span>{viewStory.user?.full_name}</span>
          <BadgeCheck size={20} />
        </div>
      </div>

      <button className='absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none'
        onClick={handleClose}
      >
        <X className="hover:scale-110 transition cursor-pointer" size={22} />
      </button>

      <div className='max-w[90vw] max-h-[90vh] flex items-center justify-center'>
        <RenderContent />
      </div>
    </div>
  )
}

export default StoryViewer
