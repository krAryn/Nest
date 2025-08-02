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
      <div className='layout w-full flex h-screen'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <UserButton /> */}
        <div className='bg-slate-50 w-full'>
          <Outlet />
        </div>

        {
          sidebarOpen   
            ? <X className='absolute top-3 right-3 p-2 z-100 by-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
              onClick={() => setSidebarOpen(false)}
            />
            : <Menu className='absolute top-3 right-3 p-2 z-100 by-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
              onClick={() => setSidebarOpen(true)}
            />
        }
      </div>
    ) : (

      <Loader />

    )
}

export default Layout
