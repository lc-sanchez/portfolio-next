"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import { TabButton } from './TabButton';

const TAB_DATA=[
    {
        title:"Soft Skills",
        id:"softskills",
        content: (
            <ul className='list-disc pl-2 text-sm grid grid-cols-2 gap-1'>
                <li>Responsabilidad</li>
                <li>Comunicación</li>
                <li>Resolución de problemas</li>
                <li>Trabajo en equipo</li>
                <li>Capacidad de adaptación</li>
            </ul>
        )
    },
    {
        title:"Technical Skills",
        id:"technicalskills",
        content: (
            <ul className='grid grid-cols-2 gap-1 list-disc pl-2 text-sm'>
                <li>Java</li>
                <li>Python</li>
                <li>Maven</li>
                <li>PostgreSQL</li>
                <li>Material UI</li>
                <li>Analisis de datos</li>
                <li>Metodologías Ágiles</li>
                <li>Testing</li>
                <li>Análisis de requerimientos</li>
            </ul>
        )
    },
    {
        title:"Educación",
        id:"educacion",
        content: (
            <ul className='list-disc pl-2 text-sm grid grid-cols-1 gap-1'>
                <li className=''>Bachiller Ciencias Naturales, Colegio Parroquial de los Polvorines</li>
                <li className=''>Técnicatura en Informática, Universidad Nacional de General Sarmiento</li>
                <li className=' font-bold'>Licenciatura en Sistemas, Universidad Nacional de General Sarmiento
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
    
    //flex flex-row justify-start mt-8 
    return (
    <section className='text-white' id="about">
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-10 px-2
    xl:gap-16 sm:py-16 xl:px-16'>
        <Image className='rounded-lg shadow-[0_0_25px_#4338ca]' src='/images/desk.jpg' 
        width={600} height={600} alt='Purple desk'
        />
        <div className='mt-8 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-2xl font-bold text-white my-4  font-mono'>Sobre mí</h2>
            <p className='text-base lg:text-lg font-mono'>
                Soy una estudiante de sistemas, fanática del café y de aprender nuevas cosas. 
                He trabajado con herramientas como Java, Python, MaterialUI, PostgreSQL y Git conjunto a metodologías ágiles y de gestión de proyectos. 
                Me adapto rápidamente a los cambios en el entorno y busco aprender de los desafíos que se me plantean en el camino. 
                Me encanta trabajar con equipos que persiguen un mismo objetivo. 
            </p>
            <div className='mt-8 grid grid-cols-1 gap-3 md:flex md:flex-row md:justify-start'>
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
            <div className='mt-4 font-mono min-h-[150px]'>
            {TAB_DATA.find((t)=> t.id === tab).content}
            </div>
        </div>
    </div>
    </section>
    )
}
