import React, {useEffect} from 'react'
import { PostsContexts } from '../context/PostsContex'
import {CircularProgress} from  '@material-ui/core'
import Identicon from 'identicon.js'
import { UserAuth } from '../context/AuthContext'
import Moment from 'react-moment'

const PostCard = () => { 
  const {postsState, getPosts} = PostsContexts()  
  const {user} = UserAuth()
  const {isLoading, posts} = postsState
  const page = 1

  useEffect (()=>{
    if (page) {
      getPosts(page)
    }
  }, [page])
  if(!posts.length && !isLoading) return "No posts"
  
  return (
    <>
    <div className='flex-row items-stretch'>
      {isLoading ? <CircularProgress />: ( 
        posts.map((post)=>(
          <div key={post._id} className='my-4 flex-row rounded-xl p-3 bg-white w-full h-max'>
          <div className='p-2 flex'>
            <img
              className='mr-2'
              width='30'
              height='30'
              src={`data:image/png;base64,${new Identicon(user._id, 30).toString()}`}
            />
            <div>{post.creator}</div>
            <div className='px-3'>
              <Moment fromNow>{post.createdAt}</Moment>
            </div>
            
            </div>
          <div className='p-3 justify-center content-center'>{post.message}</div>
          <div className='p-1 rounded-md bg-gray-200'>replies</div>
        </div>
        ))
        
      )}
  </div>
    </>
  )
}

export default PostCard