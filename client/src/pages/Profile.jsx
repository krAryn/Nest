import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom'
import { dummyPostsData, dummyUserData } from '../assets/assets';
import Loader from '../components/Loader';
// import UserProfileInfo from '../components/UserProfileInfo';
import { Calendar, MapPin, PenBox, Verified } from 'lucide-react';
import moment from 'moment';
import PostCard from '../components/PostCard';
import ProfileModel from '../components/ProfileModel';

const Profile = () => {

  const { profileId } = useParams()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [activeTab, setActiveTab] = useState('posts')
  const [showEdit, setShowEdit] = useState(false)


  const fetchUser = async () => {
    setUser(dummyUserData)
    setPosts(dummyPostsData)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return user ? (
    <div className='h-full overflow-y-auto bg-gray-50 p-6'>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <div className="h-40 md:h-56 bg-gradient-to-r from-initial to-final">
            {user.cover_photo && <img src={user.cover_photo} className='w-full h-full object-cover' alt="" />}
          </div>
          {/* <UserProfileInfo user={user} posts={posts} profileId={profileId} setShowEdit={setShowEdit} /> */}

          <div className='relative py-4 px-6 md:px-8 bg-white'>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className='w-32 h-32 border-4 border-white shadow-lg absolute -top-16 rounded-full'>
                <img src={user.profile_picture} className='absolute rounded-full z-2 ' alt="" />
              </div>
              <div className='w-full pt-16 md:pt-0 md:pl-36'>
                <div className="flex flex-col md:flex-row items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl font-bold text-gray-900">{user.full_name}</h1>
                      <Verified className='w-6 h-6 text-blue-500' />
                    </div>
                    <p className='text-gray-600'>{user.username ? `@${user.username}` : "Add a username"}</p>
                  </div>

                  {/* Edit button for account owner */}
                  {!profileId && 
                    <button onClick={() => setShowEdit(true)} className='flex items-center gap-2 border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors mt-4 md:mt-0'>
                      <PenBox className='w-4 h-4' />Edit
                    </button>}
                </div>
                <p className='text-gray-700 text-sm max-w-md mt-4'>{user.bio}</p>
                <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mt-4'>
                  <span className='flex items-center gap-1.5 '>
                    <MapPin className='w-4 h-4' />
                    {user.location ? user.location : "Add Location"}
                  </span>
                  <span className='flex items-center gap-1.5 '>
                    <Calendar className='w-4 h-4' />
                    Joined <span>{moment(user.createdAt).fromNow()}</span>
                  </span>
                </div>
                <div className='flex items-center gap-6 mt-6 border-t border-gray-200 pt-4'>
                    <div>
                      <span className='sm:text-xl font-bold text-gray-900'>{posts.length}</span>
                      <span className='text-xs sm:text-sm text-gray-500 ml-1.5'>Posts</span>
                    </div>
                    <div>
                      <span className='sm:text-xl font-bold text-gray-900'>{user.followers.length}</span>
                      <span className='text-xs sm:text-sm text-gray-500 ml-1.5'>Followers</span>
                    </div>
                    <div>
                      <span className='sm:text-xl font-bold text-gray-900'>{user.following.length}</span>
                      <span className='text-xs sm:text-sm text-gray-500 ml-1.5'>Following</span>
                    </div>
                </div>

              </div>
            </div>
          </div>


        </div>
          <div className='mt-6'>
            <div className="bg-white rounded-xl shadow p-1 flex max-w-md mx-auto">
              {["posts", "media", "likes"].map((tab) => (
                <button onClick={() => setActiveTab(tab)} key={tab} className={`flex-1 px-4 py-2 tex-sm font-medium rounded-lg transition-colors cursor-pointer ${activeTab === tab ? "bg-primary text-white": "text-gray-600 hover:text-gray-900"}`}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1).toLowerCase()}
                </button>
              ))}
            </div>

            {/* Posts */}
            {activeTab === "posts" && (
              <div className='mt-6 flex flex-col items-center gap-6'>
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            )}


            {/* Media */}
            {activeTab === "media" && (
              <div className='flex flex-wrap mt-6 max-w-6xl'>
                {
                  posts.filter((post) => post.image_urls.length > 0).map((post)=> (
                    <>
                      {post.image_urls.map((image, index) => (
                        <Link target='_blank' to={image} key={index} className='relative group'>
                          <img src={image} key={index} className='w-64 aspect-video object-cover' alt="" />
                          <p className='absolute bottom-0 right-0 text-xs p-1 px-3 backdrop-blur-xl text-white opacity-0 group-hover:opacity-100 transition duration-300'>Posted {moment(post.createdAt).fromNow()}</p>
                        </Link>
                      ))}
                    </>
                  ))
                }
              </div>
            )}
          </div>
      </div>

      {/* Profile Edit Section */}
      {showEdit && (
        <ProfileModel setShowEdit={setShowEdit} />
      )}
    </div>
  ) : (<Loader />)
};

export default Profile;