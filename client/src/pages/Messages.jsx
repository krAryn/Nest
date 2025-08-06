import React from 'react';
import { dummyConnectionsData } from '../assets/assets';

const Messages = () => {
  return (
    <div className='min-h-screen relative bg-slate-50'>
      <div className='max-w-6xl mx-auto p-6'>

        <div>
          <h1 className='text-3xl font-bold text-slate-900 mb-2'>Messages</h1>
          <p className='text-slate-600'>Toast, for the closed ones, that you have </p>
        </div>

        <div className='flex flex-col gap-3'>
          {dummyConnectionsData.map((user) => {

          })}
        </div>
      </div>
    </div>
  );
};

export default Messages;
