"use client"
import React, {useState} from 'react'
import { NavLink } from './NavLink'
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const navLinks=[
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Proyectos",
        path:"#proyectos",
    },
    {
        title:"Contacto",
        path:"#contacto",
    }
]

const Navbar = () => {
    const [navBarOpen, setNavbarOpen] = useState(false);


  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-gradient-to-t from-transparent 
    via-[#121212] to-[#0c0c0c]'>
    <div className='flex flex-wrap items-center justify-between mx-auto p-8 '>
        <a href={"/"} className='text-2xl md:text-4xl text-white font-semibold'>
            CS
        </a>
        <div className='mobile-menu block md:hidden'>
            {
                !navBarOpen? (
                    <button onClick={()=> setNavbarOpen(true)} 
                    className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5'/>
                    </button>
                ) : (
                    <button onClick={()=> setNavbarOpen(false)} 
                    className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <XMarkIcon className='h-5 w-5'/>
                    </button>
                )
            }
        </div>
        <div className='menu hidden md:block md:w-auto font-mono' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {
                    navLinks.map((link,index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    </div>
    {navBarOpen? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar