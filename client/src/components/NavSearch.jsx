import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'

const NavSearch = () => {
  return (
     <div className="p-0 flex bg-white rounded-lg text-gray-600 text-lg content-center align-middle h-10 justify-center ">
        
          <input className=" w-72  px-5 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search"/>
          
          <button type="submit" className="p-3 ">
          <AiOutlineSearch className='' size={20}/>
          
          </button>
        
        
        
      </div>
  )
}

export default NavSearch