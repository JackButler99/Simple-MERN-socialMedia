import React, {useState, useReducer} from 'react'
import { UserAuth } from '../context/AuthContext'
import { PostsContexts } from '../context/PostsContex'

import postsReducer from '../context/reducers/posts'

import Identicon from 'identicon.js'

import {RiAttachmentLine, RiMapPin2Fill} from 'react-icons/ri'
import {BsFillImageFill} from 'react-icons/bs'

const FeedForm = () => {
  const {user} = UserAuth()
  const {createPost} = PostsContexts()
  const [error, setError] = useState('')

  
  const [postData, setPostData] = useState({
    "message":"", "creator": "", "creator_id": "", "tags": "", "selectedFile":""
  })
  
  const clear = () =>{
    setPostData({"message":"", "creator": "", "creator_id": "", "tags": "", "selectedFile":""})
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()     
    try{
      await createPost(postData)
      console.log({postData})
      clear()
    }catch{
      console.log(error)
    }
    
  }
  
  return (  
  <>
  <form onSubmit={handleSubmit}>
   <div className="mb-4 w-full lg:w-3/5 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
       <div className='flex  py-2 px-4 font-mono '>
        <div>
        <img
          className='mr-2'
          width='30'
          height='30'
          src={`data:image/png;base64,${new Identicon(user._id, 30).toString()}`}
        />
        </div>
        {user.firstName} {user.lastName}
       </div>
       <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">      
           <textarea 
            name="feed" label="Post"  rows="4"
            value={postData.message}
            onChange={(e)=> setPostData({...postData, message: e.target.value, creator: user?.email, creator_id: user?._id})}
            placeholder="What's going on......." required=""
            className="p-3 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" ></textarea>
       </div>
       <div className="flex  justify-between items-center py-2 px-3 dark:border-gray-600">
          <div className="flex pl-0 space-x-1 sm:pl-2">
            <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <RiAttachmentLine size={20} />
            </button>
            <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <RiMapPin2Fill size={20} />
            </button>
            <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <BsFillImageFill size={20} />
            </button>                
          </div>
          <button type="submit" className="inline-flex mr-4 items-center py-1 px-4 text-s font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Post
          </button>

       </div>
   </div>
   
</form>
</>
  )
}

export default FeedForm