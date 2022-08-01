import React from 'react'
import FeedForm from './FeedForm'
import PostCard from './PostCard'
import PostsPagination from './PostsPagination'

const MidCard = () => {
  const page= 1
  return (
    <>
      
      <div className='flex drop-shadow-md flex-col gap-4 content-center justify-start p-8 rounded-lg w-3/5 bg-gray-200'>
        <FeedForm />        
        <PostCard />
        {/* <PostsPagination page={page} /> */}
      </div>
    </>    
    )
}

export default MidCard