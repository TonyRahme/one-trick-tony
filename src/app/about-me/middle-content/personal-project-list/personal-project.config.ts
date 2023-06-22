import { Project } from "../../about-me.model";


export const personalProjectList: Project[] = [
    {
        title: 'Personal Website',
        startDate: new Date('2022-12-23'),
        bulletpoints: [
            'This very website!',
            'Built with Angular 11, Typescript, HTML, and SCSS, deployed with Vercel',
            'Utilizes Angular Material and bootstrap v.5.3.0 for styling',
            'Utilizes Konva.js for canvas drawing (DnD tab)',
            'Utilizes amCharts5 for data visualization (Flight Tracker tab)',
        ]
    },
    {
        title: 'Flight Tracker App',
        startDate: new Date('2019-12-10'),
        bulletpoints: [
            'Utilized Google Cloud Platform (GCP) to authenticate and read-write GSheet data and gradle to build',
            'Utilized JSoup to scrape data from google searches',
            'As of April 2023, recreated in Typescript and Angular 11 web app using amCharts5 for data visualization, reactive forms,',
        ]
    },
    {
        title:'Video Game Development',
        startDate: new Date('2020-01-10'),
        endDate: new Date('2020-05-10'),
        bulletpoints: [
            'Implemented scripts for player control, resource management, enemy AI, user interface, and animation in Unity Game Engine',
            'Build from scratch a simple physics engine and game with Java in Object Oriented Programming design',
            'Documented project description, genre, objectives, challenges and more'

        ]
    },
    {
        title: 'Compiler Course - Fall Semester at University of Massachusetts (Boston)',
        startDate: new Date('2020-09-06'),
        endDate: new Date('2020-12-20'),
        bulletpoints: [
            'Worked on projects on Linux using virtual machine to improve the j– (Java) programming language conceptualized with semantics, syntax, parser generating AST'
        ]
    },
    {
        title: 'Learning Management System Webapp',
        startDate: new Date('2020-07-10'),
        endDate: new Date('2020-07-17'),
        bulletpoints: [
            'Utilized MERN stack (MySQL, Express.js, React.js, Node.js) with bootstrap for styling',
            'Implemented a drag and drop visual counting exercises with react-konva for children-first design',
            'Implemented authorization for use and admins, with admins having access to records of users, exercises they\'ve started and more',
            'In the long term the goal is to invent an LMS that is self-reliant: integrating AI that behaves like a teacher being able to predict a child\'s weakness and help strengthen their skills'
        ]  
    }
]