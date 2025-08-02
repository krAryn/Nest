import React, { useEffect, useState } from 'react';
import { dummyPostsData } from '../assets/assets';
import Loader from '../components/Loader';

const Feed = () => {

  const [feeds, setFeeds] = useState()

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData)
  }

  useEffect(() => {
    fetchFeeds()
  }, [])

  return feeds
  ? (
    <div className='overflow-auto h-screen no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      <div>
        <h1>Stories here</h1>
        <div className='p-4 space-y-6 '>
          List of Posts
        </div>
      </div>

      <div>
        <div>
          <h1>Sponsored</h1>
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
