"use client";
import React from 'react'
import { ProjectCard } from './ProjectCard'
import { ProjectTag } from './ProjectTag'
import { useState } from 'react';

const projectsData = [
    {
        id: 1, 
        title: "KarU",
        description: "Projecto web utilizando arquitectura multiservicios. Practica Profesional Universitaria conjunta con otros equipos. Se utilizo: Material UI, React, CSS",
        image: "/images/projects/karu1.jpg",
        tag: ["All", "Web", "React", "MaterialUI"],
        gitUrl:"https://github.com/lc-sanchez/karu-web",
    },
    {
        id: 2, 
        title: "Detección de Fraudes",
        description: "Practica Profesional Univesitaria sobre análisis de datos implementando un modelo de Machine Learning. Trabajo de a pares utilizando Scrum, JupiterNotebooks, Kaggle, Python.",
        image: "/images/projects/machine2.jpg",
        tag: ["All", "Web", "Python", "Streamlit","Machine Learning"],
        gitUrl:"https://github.com/lc-sanchez/TP1-MachineLearning",
    },
    {
        id: 3, 
        title: "Mago Goma",
        description: "Proyecto Introducción a la programación. Realización de un juego para comprender las bases de la programación. Se utilizó: Python, Pygame.",
        image: "/images/projects/magoGoma.jpg",
        tag: ["All", "Python", "Pygame","Escritorio"],
        gitUrl:"https://github.com/lc-sanchez/Mago-Goma",
    },
    {
        id: 4, 
        title: "Drop Wizard Tower",
        description: "Proyecto Programación I. Realización de un juego para comprender las bases de la programación orientada a objetos. Se utilizó: Java.",
        image: "/images/projects/wizardTower.jpg",
        tag: ["All", "Java","Escritorio"],
        gitUrl:"https://github.com/lc-sanchez/Drop-Wizard-Tower",
    },
    {
        id: 5, 
        title: "Clustering Humano",
        description: "Proyecto Programación III. Creación de un cluster humano para implemetación de grafos. Se utilizó: Java.",
        image: "/images/projects/clustering3.jpg",
        tag: ["All", "Java","Escritorio"],
        gitUrl:"https://github.com/lc-sanchez/Clustering-Humano",
    },
    {
        id: 6, 
        title: "Distribución Golosa",
        description: "Proyecto Programación III. Implementación de algoritmos no polinomiales. Se utilizó: Java.",
        image: "/images/projects/distribucionGolosa3.jpg",
        tag: ["All", "Java","Escritorio"],
        gitUrl:"https://github.com/lc-sanchez/Distribucion-Golosa",
    },
    {
        id: 7, 
        title: "Sopa de Letras",
        description: "Proyecto Organización del Computador I. Realización de un juego utilizando Assembler con Emu8086.",
        image: "/images/projects/sopa2.jpg",
        tag: ["All", "Assembler","Escritorio","Emu8086"],
        gitUrl:"https://github.com/lc-sanchez/Sopa-de-letras",
    },
    {
        id: 8, 
        title: "SIMD",
        description: "Proyecto Organización del Computador II. Utilización de lenguaje C y NASM para el análisis de la velocidad en el procesamiento de imagenes.",
        image: "/images/projects/SIMD.jpg",
        tag: ["All", "C","Escritorio","NASM","Assembler"],
        gitUrl:"https://github.com/lc-sanchez/SIMD",
    },
    {
        id: 9, 
        title: "Base de datos",
        description: "Proyecto Base de Datos I. Implementación de base de datos para almacenamiento de tarjetas de crédito. Se utilizó Go.",
        image: "/images/projects/BDD1.jpg",
        tag: ["All", "Go","Escritorio","PostgreSQL"],
        gitUrl:"https://github.com/lc-sanchez/TP-Base-de-Datos",
    },
    {
        id: 10, 
        title: "Driver",
        description: "Proyecto Organización del Computador II. Implementación de un módulo mediante comandos de linux y código C.",
        image: "/images/projects/driver.png",
        tag: ["All", "C","Escritorio","Linux"],
        gitUrl:"https://github.com/lc-sanchez/Driver",
    },

]

export const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    
  return (
    <>
    <h2 className='text-center text-4xl font-bold font-mono
     text-white mt-4 mb-4 md:mb-10'>
        Mis Projectos
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-4'>

    </div>
    <ul className='font-mono grid 
    md:grid-cols-3 gap-8 md:gap-12'>
        {
            projectsData.map((project) => 
            <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            />)
        }
    </ul>
    </>
  )
}
