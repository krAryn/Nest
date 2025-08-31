import React from 'react'
import { menuItemsData } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const MenuItems = ({ setSidebarOpen }) => {
    console.log("Menubar rendering")

  return (
    <div className='links px-6 text-gray-600 space-y-1 font-medium'>
        {
            menuItemsData.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setSidebarOpen(false)} className={({ isActive }) => `transition-colors px-3.5 py-2 flex items-center gap-3 rounded-xl ${isActive? "bg-indigo-50 text-primary": "hover:bg-gray-50"}`} >
                    <item.Icon className='w-5 h-5' />
                    {item.label}
                </NavLink>
            ))
        }
    </div>
  )
}

export default MenuItems
