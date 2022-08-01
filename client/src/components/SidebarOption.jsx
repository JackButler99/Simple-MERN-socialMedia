import React, {useState} from "react";


function SidebarOption({ active, onClick, text, Icon }) {
  return (
    <div 
      onClick={onClick} 
      className= {`
        px-2 py-4 text-lg font-semibold 
        flex rounded-xl items-center cursor-pointer 
        hover:bg-gray-200 hover:scale-110 transition 
        ease-out ${active == text? 'bg-gray-200 scale-125 duration-500'  : 'bg-white' }
        `}>
        <Icon size={20} />
        <h2 className='pl-1'>{text}</h2>
    </div>
  );
}

export default SidebarOption;
