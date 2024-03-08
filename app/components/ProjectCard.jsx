import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from "next/link"

export const ProjectCard = ({imgUrl, title, description, gitUrl}) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group'
        style={{background:`url(${imgUrl})`, backgroundSize: "cover"}}>
            <div className='overlay absolute rounded-t-xl
            top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
            hidden group-hover:flex group-hover:bg-opacity-80
            transition-all flex items-center justify-center'>
              <Link href={gitUrl} className='h-14 w-14 border-2 relative 
              rounded-full border-[#ADB7BE] hover:border-white group/link'>
                <CodeBracketIcon className='h-10 w-10 
                text-[#ADB7BE] m-1.5 absolute cursor-pointer 
                group-hover/link:text-white'/>
              </Link>
              {/*
              <Link href="/" className='h-14 w-14 ml-2 border-2 relative 
              rounded-full border-[#ADB7BE] hover:border-white group/link'>
                <EyeIcon className='h-10 w-10 
                text-[#ADB7BE] m-1.5 absolute cursor-pointer 
                group-hover/link:text-white'/>
              </Link>
  */}
            </div>
        </div>
        <div className='rounded-b-xl bg-[#181818] py-6 px-4 mt-1 md:min-h-[24rem]'>
            <h5 className='text-white  text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}
