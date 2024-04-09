'use client'
import React, { useState } from 'react';
import { CardContainer, CardItem } from './ui/3d-card';


const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Sign Me In',
            company: 'Florence Darlingon Technical College',
            image: './images/sign-me-in.png',
            description: 'A full stack web app made during my Capstone designed for the Florence Darlington Technical College to aid tutors in the Math Hub sign students in more efficiently, and to give managers the ability to generate reports, view graphs, and edit employee and account info.The project was developed using Blazor on .NET 8, Azure SQL, VS- Code, and GitHub in an Agile / Scrum environment.',
        },
        {
            id: 2,
            title: 'Morgue Tracker',
            company: 'McLeod Health',
            image: './images/morguetracker5.png',
            description: 'A mobile friendly full stack web app intended for employees at the McLeod morgue to streamline the intake and release process for cadavers, and to ensure that the cadaver is released to the correct funeral home.  The app was developed during an internship using ASP.NET MVC, GitHub, and Visual Studio.',
        },
        {
            id: 3,
            title: 'Bossy Books',
            company: 'Francis Marion University',
            image: './images/bossybooks.png',
            description: 'A full stack web app made with Next.js and Postgres hosted on Vercel   that allows small businesses to manage customer and invoice information.',
        },
    ];



    return (
        <div className="grid grid-cols-2 text-white gap-16">
            {projects.map(project => (
                <CardContainer divisiorValue={25}>

                    <div key={project.id}>
                        <CardItem className='text-white border bg-black border-white border-opacity-20 rounded-lg'>
                            <div className="p-4">
                                <h3 className="text-white text-lg font-bold">{project.title}</h3>
                                <p className="text-gray-300">{project.company}</p>
                                <img src={project.image} alt={project.title} className="w-full mt-4" />
                                <p className="text-gray-300 mt-4">{project.description}</p>
                            </div>
                        </CardItem>
                    </div>
                </CardContainer>
            ))}
        </div>
    );
};

export default Projects;
