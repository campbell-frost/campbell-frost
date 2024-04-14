'use client'
import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Sign Me In',
            company: 'Florence Darlingon Technical College',
            image: './images/sign-me-in.png',
            description: 'A full stack web app made during my Capstone designed for the Florence Darlington Technical College to aid tutors in the Math Hub sign students in more efficiently, and to give managers the ability to generate reports, view graphs, and edit employee and account info.  The project was developed using Blazor on .NET 8, Azure SQL, VS- Code, and GitHub in an Agile / Scrum environment.',
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
            description: 'A full stack web app made as my second Capstone with Next.js and Postgres hosted on Vercel that allows small businesses to manage customer and invoice information.',
        },
    ];

    return (
        <div className="py-30">
            <div className="grid grid-cols-1 lg:grid-cols-2 text-white gap-16">
                {projects.map(project => (
                    <CardContainer divisiorValue={50} key={project.id}>
                        <CardBody>
                            <div className="text-white border bg-black border-white border-opacity-20 rounded-lg p-7">
                                <CardItem translateZ={40}>
                                    <h3 className="text-white text-lg font-bold">{project.title}</h3>
                                </CardItem>
                                <CardItem translateZ={50}>
                                    <p className="text-gray-300">{project.company}</p>
                                </CardItem>
                                <CardItem translateZ={80}>
                                    <img src={project.image} alt={project.title} className="w-full mt-4" />
                                </CardItem>
                                <CardItem translateZ={40}>
                                    <p className="text-gray-300 mt-4">{project.description}</p>
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
};

export default Projects;
