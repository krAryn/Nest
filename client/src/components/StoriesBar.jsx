import React, { useEffect, useState } from 'react'
import { dummyStoriesData } from '../assets/assets'
import { Plus } from 'lucide-react'
import moment from "moment"
import StoryModel from './StoryModel'

const StoriesBar = () => {

    const [stories, setStories] = useState([])
    const [showModel, setShowModel] = useState(false)
    const [viewStory, setViewStory] = useState(null)

    const fetchStories = async () => {
        setStories(dummyStoriesData)
    }

    useEffect(() => {
        fetchStories()
    }, [])

  return (
    <div className='stories-section w-full no-scrollbar overflow-x-auto'>
        <div className='flex gap-4 pb-5 pl-4'>
            <div className='add-story-card rounded-lg shadow-sm min-w-30 max-w-30 h-40 cursor-pointer hover:shadow-lg transition-all border-2 border-dashed border-primary-light bg-gradient-to-b from-primary/20 to-white'
                onClick={() => setShowModel(true)}
            >
                <div className='h-full flex flex-col items-center justify-center p-4 '>
                    <div className='size-10 bg-primary rounded-full flex items-center justify-center mb-3'>
                        <Plus className='w-5 h-5 text-white' />
                    </div>
                    <p className='text-sm font-medium text-slate-700 text-center'>Create Story</p>
                </div>
            </div>
            {   
                stories.map((story, index) => (
                    <div key = {index} className='relative rounded-lg shadow min-w-30 max-w-30 h-40 cursor-pointer hover:shadow-lg transition-all bg-gradient-to-b from-initial to-final hover:from-initial-light hover:to-final-light active:scale-95'>
                        <img src={story.user.profile_picture} alt="" className='absolute size-8 top-3 left-3 z-10 rounded-full  shadow' />
                        <p className='absolute top-18 left-3 text-white-60 text-sm max-w-24 truncate'>{story.content}</p>
                        <p className='text-white absolute bottom-1 right-2 z-10 text-xs'>{moment(story.createdAt).fromNow()}</p>

                        {
                            stories.media_type !== "text" && (
                                <div className='absolute inset-0 z-1 rounded-lg bg-black overflow-hidden'>
                                    {
                                        stories.media_type === "image"
                                        ? <img src={story.media_url} alt="" className='h-full w-full object-cover hover:scale-110 transition opacity-70 hover:opacity-80' />
                                        : <video src={story.media_url} className='h-full w-full object-cover hover:scale-110 transition opacity-70 hover:opacity-80' />
                                    }
                                </div>
                            )
                        }

                    </div>
                ))
            }
        </div>
        {showModel && <StoryModel setShowModel={setShowModel} fetchStories={fetchStories} />}
    </div>
  )
}

export default StoriesBar
