import React from 'react';
import { assets } from '../src/assets/assets';
import { Star } from 'lucide-react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useAppContext } from '../context/AppContext';

const Login = () => {

  const { showLogin, showSignUp, setShowLogin, setShowSignUp } = useAppContext()

  return (
    <div
      onClick={() => {
        setShowLogin(false)
        setShowSignUp(false)
      }}
    >
      <img src={assets.bgImage} className='absolute top-0 left-0 -z-1 w-full h-full object-cover' alt="" />

      {showLogin && (
        <div className='login bg-black/80 absolute z-10 w-screen h-screen overflow-hidden flex items-center justify-center'>
          <SignIn />
        </div>
      )}
      {showSignUp && (
        <div className='signup bg-black/80 absolute z-10 w-screen h-screen overflow-hidden flex items-center justify-center'>
          <SignUp />
        </div>
      )}

      <div className='max-w-[1300px] md:px-14 max-md:px-10 flex flex-col mx-auto w-full h-[100vh] overflow-hidden'>
      <nav className='flex md:justify-between w-[100%] py-4 md:py-8 h-fit'>
        <img src={assets.logo} className='h-12 max-md:h-10 object-contain max-md:m-auto' alt="" />
        <div className='max-md:hidden flex gap-5 items-center'>
          <button
            className='bg-primary border border-primary hover:bg-primary-light hover:border-primary-light hover:scale-110 transition text-white px-6 py-1 rounded-full'
            onClick={(e) => {e.stopPropagation(); setShowLogin(true)}}
          >Sign In</button>
          <button
            className='text-primary border border-primary hover:scale-110 transition px-6 py-1 rounded-full'
            onClick={(e) => {e.stopPropagation(); setShowSignUp(true)}}
          >Sign Up</button>
        </div>
      </nav>

      <div className='main flex flex-col max-md:border-t-gray-400 max-md:border-t-1 h-full justify-center items-center text-center gap-1'>

        <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent'>For the ones, who matter</h1>
        <p className='text-xl mx:text-3xl text-primary md:pb-2'>Invite your closed ones, on your Nest.</p>
        <div className='flex gap-5 items-center'>
          <button
            className='bg-primary border border-primary hover:bg-primary-light hover:border-primary-light hover:scale-110 transition text-white px-6 py-1 rounded-full'
            onClick={(e) => {e.stopPropagation(); setShowLogin(true)}}
          >Sign In</button>
          <button
            className='text-primary border border-primary hover:scale-110 transition px-6 py-1 rounded-full'
            onClick={(e) => {e.stopPropagation(); setShowSignUp(true)}}
          >Sign Up</button>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Login;
