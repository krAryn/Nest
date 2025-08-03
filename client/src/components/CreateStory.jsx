import { ArrowLeft, Sparkle, TextIcon, Upload } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const CreateStory = ({ setShowModel, fetchStories }) => {

    const [mode, setMode] = useState("text")
    const [text, setText] = useState("")
    const [media, setMedia] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleMediaUpload = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            setMedia(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const handleCreateStory = async () => {

    }

  return (
    <div className='fixed inset-0 z-110 min-h-screen bg-black/40 backdrop-blur text-white flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
            <div className='text-center flex items-center justify-between mb-4'>
                <button onClick={() => setShowModel(false)} className='text-white p-2 cursor-pointer'>
                    <ArrowLeft className='' />
                </button>
                <h2 className='text-lg font-semibold'>Create Story</h2>
                <span className='w-10'></span>
            </div>

            <div className='rounded-lg h-96 flex items-center justify-center relative bg-primary'>
                {
                    mode === "text" && (
                        <textarea className='bg-transparent text-white w-full h-full p-6 text-lg resize-none outline-none' placeholder="What's On, Today?" onChange={(e) => setText(e.target.value)} value={text}></textarea>
                    )
                }
                {
                    mode === "media" && (
                        media?.type.startsWith("image") ? (
                            <img src={previewUrl} alt="" className='object-contain max-h-full' />
                        ) : (
                            <video src={previewUrl} className='object-contain max-h-full' autoPlay />
                        )
                    )
                }

            </div>
            <div className='flex gap-2 mt-4'>
                <button className={`flex flex-1 items-center justify-center gap-2 p-2 rounded ${mode === "text" ? "bg-white text-black": "bg-zinc-800"}`}
                    onClick={() => {setMode("text"); setMedia(null); setPreviewUrl(null)}}
                >
                    <TextIcon size={18} /> Text
                </button>
                <label className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === "media"? "bg-white text-black": "bg-zinc-800"}`}>
                    <input type="file" accept='image/*, video/*' onChange={(e) => {handleMediaUpload(e), setMode("media")}} className='hidden' />
                    <Upload size={18} /> Photo/Video
                </label>
            </div>
            <button onClick={(e) => toast.promise(handleCreateStory, {
                loading: "Saving...",
                success: <p>Story Added</p>,
                error: <p>${e.message}</p>
            })} className='flex items-center justify-center gap-2 text-white py-3 mt-4 w-full rounded bg-gradient-to-r from-pink-600 to-purple-600 active:scale-95 transition cursor-pointer'>
                <Sparkle size={18} /> Create Story
            </button>
      </div>   
    </div>
  )
}

export default CreateStory
