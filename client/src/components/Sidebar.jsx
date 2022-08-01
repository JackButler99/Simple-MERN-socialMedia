import React, {useState} from 'react'

import {GiBirdTwitter} from "react-icons/gi";
import SidebarOption from "./SidebarOption";

import {AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import {BsFillChatLeftDotsFill} from "react-icons/bs"
import {CgProfile} from "react-icons/cg";
import {SiChatbot} from "react-icons/si";
import {FiSettings} from "react-icons/fi"


const Sidebar = () => {
  const Menus = [
    {name: "Home", icon:{AiOutlineHome}},
    {name: "Feeds", icon:{BsFillChatLeftDotsFill}},
    {name: "Profile", icon:{CgProfile}},
    {name: "Chats", icon:{SiChatbot}},    
    {name: "Browse", icon:{AiOutlineSearch}},
    {name: "Settings", icon:{FiSettings} }
  ]
  const [active, setActive] = useState('Home')
  return (
    <div className="h-screen flex-row max-w-min pl-3 pr-1 pt-2">
      <SidebarOption active={active} onClick={()=>setActive("Home")} Icon={AiOutlineHome} text="Home" />
      <SidebarOption active={active} onClick={()=>setActive("Feeds")} Icon={BsFillChatLeftDotsFill} text="Feeds" />
      <SidebarOption active={active} onClick={()=>setActive("Profile")} Icon={CgProfile} text="Profile" />
      <SidebarOption active={active} onClick={()=>setActive("Chats")} Icon={SiChatbot} text="Chats" />
      <SidebarOption active={active} onClick={()=>setActive("Browse")} Icon={AiOutlineSearch} text="Browse" />
      <SidebarOption active={active} onClick={()=>setActive("Settings")} Icon={FiSettings} text="Settings" />

    </div>
  )
}

export default Sidebar