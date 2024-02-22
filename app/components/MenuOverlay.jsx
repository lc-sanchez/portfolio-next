import React from 'react'
import { NavLink } from './NavLink'
//bg-gradient-to-b from-[#111111] via-[#161616] to-transparent bg-opacity-95
const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col pt-4 pb-10 items-center font-mono'
    style={{ backgroundImage: 'linear-gradient(to bottom, rgba(17, 17, 17, 1), rgba(22, 22, 22, 1), rgba(22, 22, 22, 0.6))' }}
    >
        {links.map((link,index) => (
        <li key={index}>
            <NavLink href={link.path} title={link.title}/>
        </li>))}
    </ul>
  )
}

export default MenuOverlay