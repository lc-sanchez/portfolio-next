import React from 'react'
import { ProjectCard } from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Mi Portfolio",
        description: "Porfolio web single page utilizando: Next.js, React, Tailwind CSS",
        image: "",
        tag: ["All","Web","React", "Tailwind", "Next.js"],
    },
    {
        id: 2, 
        title: "KarU",
        description: "Projecto web utilizando arquitectura multiservicios. Practica Profesional Universitaria conjunta con otros equipos. Se utilizo: Material UI, React, CSS",
        image: "",
        tag: ["All", "Web", "React", "MaterialUI"],
    }
]

export const ProjectsSection = () => {
  return (
    <>
    <h2 className='text-center text-4xl font-bold font-mono text-white mt-4 mb-8 md:mb-12'>Mis Projectos</h2>
    <div className='font-mono'>
        {
            projectsData.map((project) => 
            <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            />)
        }
    </div>
    </>
  )
}
