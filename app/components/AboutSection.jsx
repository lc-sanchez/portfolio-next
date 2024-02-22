"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import { TabButton } from './TabButton';

const TAB_DATA=[
    {
        title:"Soft Skills",
        id:"softskills",
        content: (
            <ul className='list-disc pl-2 text-sm'>
                <li>Responsabilidad</li>
                <li>Comunicación</li>
                <li>Completar...</li>
            </ul>
        )
    },
    {
        title:"Technical Skills",
        id:"technicalskills",
        content: (
            <ul className='grid grid-cols-2 list-disc pl-2 text-sm'>
                <li>Java</li>
                <li>Python</li>
                <li>Maven</li>
                <li>PostgreSQL</li>
                <li>Material UI</li>
                <li>React</li>
                <li>HTML/CSS</li>
                <li>Analisis de datos</li>
            </ul>
        )
    },
    {
        title:"Educación",
        id:"educacion",
        content: (
            <ul className='list-disc pl-2 text-sm'>
                <li className='mb-2'>Bachiller Ciencias Naturales, Colegio Parroquial de los Polvorines</li>
                <li className='mb-2'>Técnicatura en Informática, Universidad Nacional General Sarmiento</li>
                <li className='mb-2 font-bold'>Licenciatura en sistemas, Universidad Nacional General Sarmiento
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500  to-pink-600'> (En curso)</span></li>
            </ul>
        )
    },
    {
        title:"Experiencia",
        id:"experiencia",
        content: (
            <ul className='list-disc pl-2 text-sm'>
                <li className='font-bold'>03/2023-07/2023: Práctica Profesional Universitaria</li>
                <ul className='list-disc pl-2 ml-4 text-xs'>
                    <li className='mb-1'>Analisis de Datos</li>
                    <li className='mb-1'>Machine Learning</li>
                    <li className='mb-1'>Testing</li>
                    <li className='mb-1'>React</li>
                </ul>
            </ul>
        )
    }
]




export const AboutSection = () => {
    const [tab, setTab] = useState("softskills");
    const [isPending, startTransition] = useTransition();
    
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    
    
    return (
    <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-10 px-2
    xl:gap-16 sm:py-16 xl:px-16'>
        <Image className='rounded-lg shadow-[0_0_25px_#4338ca]' src='/images/desk.jpg' 
        width={600} height={600} alt='Purple desk'
        />
        <div className='mt-8 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-2xl font-bold text-white my-4  font-mono'>Sobre mí</h2>
            <p className='text-base lg:text-lg font-mono'>
                Soy una estudiante de sistemas, fanática del café y de aprender nuevas cosas. He trabajado con herramientas como Java, Python, React, MaterialUI, PostgreSQL, HTML, CSS y Git. Me adaptó rápidamente a los cambios en el entorno y busco aprender de los desafíos que se me plantean en el camino. Me encanta trabajar con equipos que persiguen un mismo objetivo. 
            </p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton
                    selectTab={()=> handleTabChange("softskills")} active={tab === "softskills"}>
                    {" "}Soft Skills{" "}
                </TabButton>
                <TabButton 
                    selectTab={()=> handleTabChange("technicalskills")} active={tab === "technicalskills"}>
                    {" "}Technical Skills{" "}
                </TabButton>
                <TabButton 
                    selectTab={()=> handleTabChange("educacion")} active={tab === "educacion"}>
                    {" "}Educación{" "}
                </TabButton>
                <TabButton 
                    selectTab={()=> handleTabChange("experiencia")} active={tab === "experiencia"}>
                    {" "}Experiencia{" "}
                </TabButton>
            </div>
            <div className='mt-4 font-mono overflow-y-auto min-h-[150px]'>
            {TAB_DATA.find((t)=> t.id === tab).content}
            </div>
        </div>
    </div>
    </section>
    )
}
