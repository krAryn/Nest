import React, { useRef, useState, useEffect } from 'react';
import { dummyMessagesData, dummyUserData } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { ImageIcon, SendHorizonal } from 'lucide-react';

const ChatBox = () => {

  const messages = dummyMessagesData
  const [text, setText] = useState("")
  const [textRow, setTextRow] = useState(1)
  const [image, setImage] = useState(null)
  const [user, setUser] = useState(dummyUserData)
  const messagesEndRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  })

  const sendMessage = async () => {
    setTimeout(() => {
      setText("")
      setTextRow(1)
    }, 10)
  }


  return (
    <div className='flex flex-col h-full max-w-6xl mx-auto'>
      <div className='flex items-center gap-2 p-2 md:px-10 bg-slate-50 border-b rounded-full border-gray-300 mx-5'>
        <img src={user.profile_picture} className='size-8 rounded-full' alt="" />
        <div>
          <p className='font-meduim'>{user.full_name}</p>
          <p className='text-sm text-gray-500 -mt-1.5'>@{user.username}</p>
        </div>
      </div>

      <div className='p-5 md:px-10 h-full overflow-y-auto'>
        <div className='space-y-4 w-full mx-auto'>
          {
            messages.toSorted((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((message, index) => (
              <div key={index} className={`flex flex-col`}>
                <div className={`p-2 text-sm max-w-sm bg-final text-white ${message.message_type === "image" ? "rounded-xl" : "rounded-full"} shadow ${message.to_user_id !== user._id ? "rounded-bl-none self-start" : "self-end rounded-br-none"}`}>
                  {
                    message.message_type === "image"
                      ? <Link to={message.media_url}><img src={message.media_url} className='w-full max-w-sm rounded-lg mb-1 cursor-pointer' alt="" /></Link>
                      : <p className='px-2'>{message.text}</p>
                  }

                </div>
              </div>
            ))
          }
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className='px-4'>
        <div className='flex items-center max-w-4xl mx-auto gap-2'>
          {/* <input type="text" className='flex-1 outline-none text-slate=700' placeholder="Type a message..." /> */}
          <textarea className='flex-1 outline-none resize-none text-slate=700 items-center gap-3 pr-24 pl-5 py-3 rounded-3xl bg-white w-full mx-auto border border-gray-200 shadow' placeholder='Type a message...' onChange={e => {
            console.log(e)
            setText(e.currentTarget.value)
            setTextRow(e.currentTarget.scrollHeight * e.currentTarget.rows / e.currentTarget.clientHeight)
          }}
            rows={Math.min(4, textRow)}
            value={text}
            onKeyDown={e => { if (!e.shiftKey && e.key === "Enter") sendMessage() }}
          />
          {/* <input type="text" placeholder='hello' /> */}
          <div className='h-full w-0.5 bg-black' />
          <div className='border-l border-black/30 pl-2 -translate-x-26 flex gap-2'>

            <label htmlFor='image' className='place-self-center'>
              <input type="file" id="image" accept='image/*' hidden onChange={(e) => { console.log(e.target.files); setImage(e.currentTarget.files[0]) }} />

              {
                image
                  ? <img src={URL.createObjectURL(image)} className='h-8 rounded' alt="" />
                  : <ImageIcon className='size-6 text-gray-400 cursor-pointer' />
              }
            </label>
            <button onClick={sendMessage} className='bg-gradient-to-br from-initial to-final hover:from-initial-light hover:to-final-light active:scale-95 text-white p-2 rounded-full transition-all'>
              <SendHorizonal className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
