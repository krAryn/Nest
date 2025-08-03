import { UserButton } from '@clerk/clerk-react'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { dummyUserData } from '../assets/assets'
import Loader from '../components/Loader'

const Layout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const user = dummyUserData

  return user
    ? (
      <div className={`layout w-screen flex h-screen`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />



        <div className={`content max-sm:w-screen w-[calc(100vw-250px)] bg-slate-50 `}>
          <div className={`sm:hidden ${sidebarOpen? "max-sm:block" : "max-sm:hidden"} absolute w-full h-full bg-black/25`}
            onClick={() => setSidebarOpen(false)}
          ></div>

          <div className='outlet-container w-full h-screen pt-10 xl:pr-5 overflow-y-hidden'>
          <Outlet />
          </div>

        </div>


        {
          sidebarOpen   
            ? <X className='absolute top-3 right-3 p-2 z-200 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden cursor-pointer'
              onClick={() => setSidebarOpen(false)}
            />
            : <Menu className='absolute top-3 right-3 p-2 z-200 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden cursor-pointer'
              onClick={() => setSidebarOpen(true)}
            />
        }

      </div>
    ) : (

      <Loader />

    )
}

export default Layout
