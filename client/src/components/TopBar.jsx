import React from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import NavSearch from '../components/NavSearch';
import Mock_menu from '../components/Mock_menu';

import {GiBirdTwitter} from "react-icons/gi";

import { UserAuth } from '../context/AuthContext';

const TopBar = () => {
  const {user, logOut} = UserAuth()

  const handleLogout = async () => {
    try {
      await logOut()
     
    }catch (error) {
      console.log(error)
    }
  } 
  return (
    <>
			<nav className="w-full p-3 rounded bg-[#3bb19b] flex items-center justify-between">
        <Link  to='/home'>    
          <div className='flex font-bold  text-white text-xl p-2'>
            <GiBirdTwitter className='mt-0 m-1'/> 
             fakebook 
          </div>
				</Link >
        <NavSearch />
        <button className='mr-4  text-xs  font-bold border-none outline-none p-2 bg-white rounded ' onClick={handleLogout}>
					Log Out
				</button>
			</nav> 
    </>
  )
}

export default TopBar