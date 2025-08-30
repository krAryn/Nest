import React, { useRef, useState, useEffect } from 'react';
import { dummyMessagesData, dummyUserData } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const ChatBox = () => {

  const messages = dummyMessagesData
  const [text, setText] = useState("")
  const [image, setImage] = useState(null)
  const [user, setUser] = useState(dummyUserData)
  const messagesEndRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  })

  const sendMessage = async () => {

  }


  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center gap-2 p-2 md:px-10 xl:pl-42 bg-slate-50 border-b rounded-full border-gray-300 mx-5'>
        <img src={user.profile_picture} className='size-8 rounded-full' alt="" />
        <div>
          <p className='font-meduim'>{user.full_name}</p>
          <p className='text-sm text-gray-500 -mt-1.5'>@{user.username}</p>
        </div>
      </div>

      <div className='p-5 md:px-10 h-full overflow-y-auto'>
        <div className='space-y-4 max-w-4xl mx-auto'>
          {
            messages.toSorted((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((message, index) => (
              <div key={index} className={`flex flex-col`}>
                <div className={`p-2 text-sm max-w-sm bg-final text-white ${message.message_type === "image"? "rounded-xl" :"rounded-full"} shadow ${message.to_user_id !== user._id ? "rounded-bl-none self-start": "self-end rounded-br-none"}`}>
                  {
                    message.message_type === "image" 
                    ? <Link to={message.media_url}><img src={message.media_url} className='w-full max-w-sm rounded-lg mb-1 cursor-pointer' alt="" /></Link>
                    : <p>{message.text}</p>
                  }
                  
                </div>
              </div>
            ))
          }
          <div ref={messagesEndRef} /> 
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
