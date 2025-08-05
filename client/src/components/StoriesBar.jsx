import React, { useEffect, useState } from 'react'
import { dummyStoriesData } from '../assets/assets'
import { Plus } from 'lucide-react'
import moment from "moment"
import CreateStory from './CreateStory'
import { slide } from "../utils/horizontalScroll.js"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StoryViewer from './StoryViewer.jsx'

const StoriesBar = () => {

    const [stories, setStories] = useState([])
    const [showModel, setShowModel] = useState(false)
    const [viewStory, setViewStory] = useState(null)
    const [showNextPrevBtn, setShowNextPrevBtn] = useState()
    const observer = new ResizeObserver((entries) => {
        setShowNextPrevBtn(document.querySelector(".stories-section")?.offsetWidth < entries[0].target.offsetWidth)
    })

    const fetchStories = async () => {
        setStories(dummyStoriesData)
    }

    useEffect(() => {
        fetchStories()
        observer.observe(document.querySelector(".stories-section .card-container"))
    }, [])

    return (
        <div className='stories-section w-full no-scrollbar overflow-x-auto relative' onChange={() => console.log("itemChanged")}>
            {

                showNextPrevBtn &&

                (
                    <div className='sticky left-0 right-0 w-full flex items-center justify-between z-100 px-10 mb-2'>

                        <div className='bg-primary text-white p-1 rounded-full active:scale-95 cursor-pointer' onClick={() => slide(document.querySelector(".stories-section"), "prev")}>
                            <ChevronLeft size={25} />
                        </div>
                        <div className='bg-primary text-white p-1 rounded-full active:scale-95 cursor-pointer' onClick={() => slide(document.querySelector(".stories-section"), "NEXT")}>
                            <ChevronRight size={25} />
                        </div>
                    </div>
                )
                }
            <div className='card-container flex gap-4 px-4 w-fit'>

                {/* Add Story Card */}
                <div className='add-story-card rounded-lg shadow-sm min-w-30 max-w-30 min-h-40 max-h-40 cursor-pointer hover:shadow-lg transition-all border-2 border-dashed border-primary-light bg-gradient-to-b from-primary/20 to-white'
                    onClick={() => setShowModel(true)}
                >
                    <div className='h-full flex flex-col items-center justify-center p-4 '>
                        <div className='size-10 bg-primary rounded-full flex items-center justify-center mb-3'>
                            <Plus className='w-5 h-5 text-white' />
                        </div>
                        <p className='text-sm font-medium text-slate-700 text-center'>Create Story</p>
                    </div>
                </div>

                {/* Followers, Posted Stories List */}
                {
                    stories.map((story, index) => (
                        <div onClick={() => setViewStory(story)} key={index} className='relative rounded-lg shadow min-w-30 max-w-30 min-h-40 max-h-40 cursor-pointer hover:shadow-lg transition-all bg-gradient-to-b from-initial to-final hover:from-initial-light hover:to-final-light active:scale-95'>
                            <img src={story.user.profile_picture} alt="" className='absolute size-8 top-3 left-3 z-10 rounded-full  shadow' />
                            <p className='story-content z-2 absolute top-18 left-3 text-white/60 text-sm max-w-24 truncate'>{story.content}</p>
                            <p className='text-white absolute bottom-1 right-2 z-10 text-xs'>{moment(story.createdAt).fromNow()}</p>

                            {
                                story.media_type !== "text" ? (
                                    <div className='absolute inset-0 z-1 rounded-lg bg-black overflow-hidden'>
                                        {
                                            story.media_type === "image"
                                                ? <img src={story.media_url} alt="" className='h-full w-full object-cover hover:scale-110 transition opacity-70 hover:opacity-80' />
                                                : <video src={story.media_url} className='h-full w-full object-cover hover:scale-110 transition opacity-70 hover:opacity-80' title='video' muted autoPlay />
                                        }
                                    </div>
                                ):(
                                    <div className='absolute inset-0 z-1 rounded-lg bg-gradient-to-b from-initial to-final hover:from-initial-light hover:to-final-light transition overflow-hidden'></div>
                                )
                            }

                        </div>
                    ))
                }
            </div>
            {showModel && <CreateStory setShowModel={setShowModel} fetchStories={fetchStories} />}
            {viewStory && <StoryViewer viewStory={viewStory} setViewStory={setViewStory} />}
        </div>
    )
}

export default StoriesBar
