import React from 'react'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'
import MidCard from '../components/MidCard'

import { UserAuth } from '../context/AuthContext'; 

const Home = () => {   
  return (  
    <>
			<TopBar />
      <div className='flex'>
        <Sidebar />
        <MidCard />
      </div>
    </>
  )
}

export default Home