import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'

const StoryModel = ({ setShowModel, fetchStories }) => {

    const [mode, setMode] = useState("text")
    const [background, setBackground] = useState("black")
    const [text, setText] = useState("")
    const [media, setMedia] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleMediaUpload = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            setMedia(file),
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const handleCreateStory = async () => {

    }

  return (
    <div className='fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
            <div className='text-center flex items-center justify-between mb-4'>
                <button onClick={() => setShowModel(false)} className='text-white p-2 cursor-pointer'>
                    <ArrowLeft className='' />
                </button>
                <h2 className='text-lg font-semibold'></h2>
                <span className='w-10'></span>
            </div>
      </div>   
    </div>
  )
}

export default StoryModel
