import React, { useEffect, useState, useRef } from 'react';
import { assets, dummyPostsData } from '../assets/assets';
import Loader from '../components/Loader';
import StoriesBar from '../components/StoriesBar';
import { MessageSquareQuote } from 'lucide-react';
import PostCard from '../components/PostCard';
import RecentMessages from '../components/RecentMessages';

const Feed = () => {

  const [feeds, setFeeds] = useState()
  const recentMessagesSection = useRef()
  const recentMessagesToggleButton = useRef()

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData)
  }


  // let isRecentMessagesVisible = false;
  const toggleRecentMessages = (e) => {
    e.stopPropagation()
    console.log("show")
    recentMessagesSection.current.style.transform = "translateY(-100%)"
    recentMessagesToggleButton.current.style.opacity = "0"
  }

  useEffect(() => {
    fetchFeeds()
  }, [])

  return feeds
    ? (
      <div className='feeds xl:pr-5 flex items-start justify-center xl:gap-8 w-full h-full'
        onClick={(e) => {
          recentMessagesSection.current.style.transform = "translateY(0)"
          // console.log(document.querySelector("body").clientWidth)
          if (document.querySelector("body").clientWidth < 1280) {
            console.log("Hello")
            recentMessagesToggleButton.current.style.opacity = "100%"
          }
        }}
      >

        <div className='w-full overflow-x-hidden overflow-y-auto h-full'>
          <StoriesBar />
          <div className='px-4 py-4 h-fit flex flex-col gap-4'>
            {feeds.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>


        <div ref={recentMessagesSection} className='recent-messages max-xl:absolute max-xl:bottom-14 max-xl:right-6 max-xl:w-[300px] xl:relative max-xl:translate-y-[100%] transition-all flex flex-col gap-3 min-w-[300px] z-100'>
          <div className='h-10 xl:hidden relative invisible'></div>
          <div ref={recentMessagesToggleButton} className='toggle-button bg-primary text-white rounded-full p-4 xl:hidden absolute right-0 -top-2 transition-all cursor-pointer active:scale-90 transition-all'
            onClick={toggleRecentMessages}
          >
            <MessageSquareQuote size={20} />
          </div>
          <div className={`main max-w-xs text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow border border-gray-200 bg-white`}>
            <h3 className='text-slate-800 font-semibold'>Sponsored</h3>
            <img src={assets.sponsored_img} className='w-75 h-50 rounded-md' alt="" />
            <p className='text-slate-600'>Email marketing</p>
            <p className='text-slate-400'>Take your Business off the charts using your Nest for marketing</p>
          </div>
          <RecentMessages />
        </div>

      </div>
    ) : (
      <div className='feeds'>
        <Loader />
      </div>
    )
};

export default Feed;
