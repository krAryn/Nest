import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Feed from '../pages/Feed'
import Messages from '../pages/Messages'
import ChatBox from '../pages/ChatBox'
import Connections from '../pages/Connections'
import Discover from '../pages/Discover'
import Profile from '../pages/Profile'
import Layout from '../pages/Layout'
import CreatePost from '../pages/CreatePost'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import AppContextProvider from '../context/AppContext'

const Index = () => {
  return (
    <>
      <SignedOut>
        <Login />
      </SignedOut>
      <SignedIn>
        <Layout />
      </SignedIn>
    </>
  )
}

const App = () => {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </AppContextProvider>
  )
}

export default App
