import React, { useEffect, useState } from 'react';
import { dummyPostsData } from '../assets/assets';
import Loader from '../components/Loader';
import StoriesBar from '../components/StoriesBar';
import { MessageSquareQuote } from 'lucide-react';

const Feed = () => {

  const [feeds, setFeeds] = useState()

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData)
  }


  let isRecentMessagesVisible = false;
  const toggleRecentMessages = () => {
    console.log(isRecentMessagesVisible)
    const ele = document.querySelector(".recent-messages")

    if (!isRecentMessagesVisible) {
      ele.style.transform = "translateY(0)"
      isRecentMessagesVisible = true;
    } else {
      ele.style.transform = "translateY(60%)";
      isRecentMessagesVisible = false
    }
  }

  useEffect(() => {
    fetchFeeds()
  }, [])

  return feeds
  ? (
    <div className='feeds pt-10 xl:pr-5 flex items-start justify-center xl:gap-8 w-full h-full'>

      <div className='flex flex-col gap-4 w-full overflow-hidden'>
        <StoriesBar />
        <div className='px-4'>
          List of Posts
        </div>
      </div>
      

      <div className='recent-messages max-xl:absolute max-xl:bottom-2 max-xl:right-6 max-xl:w-[300px] xl:relative transition-all flex flex-col gap-3 min-w-[300px]' style={{transform: "translateY(60%)"}}>
        <div className='h-10 xl:hidden relative invisible'></div>
        <div className='toggle-button bg-primary text-white rounded-full p-4 xl:hidden absolute right-0 -top-4 transition-all cursor-pointer active:scale-90'
          onClick={toggleRecentMessages}
        >
          <MessageSquareQuote size={20} />
        </div>
        <div className='main border rounded-lg p-4 '>
          <h1>Sponsored</h1>
          <h1>Recent Messages</h1>
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
