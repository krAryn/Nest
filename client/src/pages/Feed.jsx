import React, { useEffect, useState, useRef } from 'react';
import { assets, dummyPostsData } from '../assets/assets';
import Loader from '../components/Loader';
import StoriesBar from '../components/StoriesBar';
import { MessageSquareQuote } from 'lucide-react';
import PostCard from '../components/PostCard';

const Feed = () => {

  const [feeds, setFeeds] = useState()
  const recentMessagesBtnRef = useRef()

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData)
  }


  let isRecentMessagesVisible = false;
  const toggleRecentMessages = () => {
    console.log(isRecentMessagesVisible)

    if (!isRecentMessagesVisible) {
      recentMessagesBtnRef.current.style.transform = "translateY(-100%)"
      isRecentMessagesVisible = true;
    } else {
      recentMessagesBtnRef.current.style.transform = "translateY(0)";
      isRecentMessagesVisible = false
    }
  }

  useEffect(() => {
    fetchFeeds()
  }, [])

  return feeds
    ? (
      <div className='feeds xl:pr-5 flex items-start justify-center xl:gap-8 w-full h-full'>

        <div className='w-full overflow-x-hidden overflow-y-auto h-full pt-15'>
          <StoriesBar />
          <div className='px-4 py-4 h-fit flex flex-col gap-4'>
            {feeds.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>


        <div ref={recentMessagesBtnRef} className='recent-messages max-xl:absolute max-xl:bottom-14 max-xl:right-6 max-xl:w-[300px] xl:relative max-xl:translate-y-[100%] transition-all flex flex-col gap-3 min-w-[300px]'>
          <div className='h-10 xl:hidden relative invisible'></div>
          <div className='toggle-button bg-primary text-white rounded-full p-4 xl:hidden absolute right-0 -top-2 transition-all cursor-pointer active:scale-90'
            onClick={toggleRecentMessages}
          >
            <MessageSquareQuote size={20} />
          </div>
          <div className={`main max-w-xs text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow border border-gray-200 bg-slate-100`}>
            <h3 className='text-slate-800 font-semibold'>Sponsored</h3>
            <img src={assets.sponsored_img} className='w-75 h-50 rounded-md' alt="" />
            <p className='text-slate-600'>Email marketing</p>
            <p className='text-slate-400'>Take your Business off the charts using your Nest for marketing</p>
          </div>
            <h1>Recent Messages</h1>
        </div>

      </div>
    ) : (
      <div className='feeds'>
        <Loader />
      </div>
    )
};

export default Feed;
