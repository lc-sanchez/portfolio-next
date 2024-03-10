"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500  to-pink-600 font-mono'>Bienvenidos a mi {""}</span>
                    <br></br>
                    <TypeAnimation 
                        sequence={
                            [
                                'Espacio',
                                1000,
                                'Lugar',
                                1000,
                                'Portfolio',
                                1000
                            ]
                        }
                        wrapper="span"
                        speed={30}
                        style={{fontFamily:'monospace'}}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-mono'>Una pequeña área para poder presentar los proyectos y conocimientos que me embarqué hasta ahora. Let's go! </p>
                <div>
                    <button className='px-6 py-3 w-full 
                    sm:w-fit rounded-full mr-4 
                    bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white font-mono'>
                        <Link href="#contactame">
                            Redes
                        </Link>
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br  hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white mt-3'>
                        <a download href="./CV.pdf" alt="Mi CV" className='block hover:bg-slate-900 rounded-full px-5 py-2 font-mono' style={{
                        backgroundImage:`url('/images/banner-bg-sin-as.png')`, backgroundSize: '', backgroundPosition: 'center'
                    }}>
                            Mi CV
                        </a>
                    </button>
                </div>
                <div className="loader" ></div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] bg-opacity-70 hover:bg-opacity-90 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image src="/images/header-img.svg"
                    alt="astronaut"
                    width={250}
                    height={250}
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
