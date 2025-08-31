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

  const hideRecentMessages = (e) => {
    e.stopPropagation()
    recentMessagesSection.current.style.transform = "translateY(-100%)"
    recentMessagesToggleButton.current.style.opacity = "0"
    setTimeout(() => {
      recentMessagesToggleButton.current.style.display = "none"
    }, 250)
  }

  useEffect(() => {
    fetchFeeds()
  }, [])

  return feeds
    ? (
      <div className='h-full overflow-y-auto'>
        <div className='mb-10 mt-6 ml-6'>
          <h1 className='text-3xl font-bold text-slate-900 mb-2 '>Feeds</h1>
          <p className='text-slate-600'>Checkout, What's Up in your Nest</p>
        </div>
      <div className='feeds xl:pr-5 flex items-start justify-center xl:gap-8 w-full'
        onClick={(e) => {
          recentMessagesSection.current.style.transform = "translateY(0)"
          // console.log(document.querySelector("body").clientWidth)
          if (document.querySelector("body").clientWidth < 1280) {
            recentMessagesToggleButton.current.style.opacity = "100%"
            recentMessagesToggleButton.current.style.display = "block"
          }
        }}
      >

        <div className='w-full overflow-x-hidden h-full'>
          <StoriesBar />
          <div className='py-4 h-fit flex flex-col gap-4'>
            {feeds.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>


        <div ref={recentMessagesSection} className='recent-messages max-xl:absolute max-xl:bottom-14 max-xl:right-6 max-xl:w-[300px] xl:relative max-xl:translate-y-[100%] transition-all flex flex-col gap-3 min-w-[300px] z-100'>
          <div className='h-10 xl:hidden relative invisible'></div>
          <div ref={recentMessagesToggleButton} className='toggle-button bg-primary text-white rounded-full p-4 xl:hidden absolute right-0 -top-2 transition-all cursor-pointer active:scale-90 duration-250'
            onClick={hideRecentMessages}
          >
            <MessageSquareQuote size={20} />
          </div>
          <RecentMessages />
        </div>

      </div>
      </div>

    ) : (
      <div className='feeds'>
        <Loader />
      </div>
    )
};

export default Feed;
