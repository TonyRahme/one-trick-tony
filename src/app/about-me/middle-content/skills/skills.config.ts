import { Skill } from "../../about-me.model";

export const skillsConfig: Skill[] = [
    {
        title: 'Technical Skills',
        description: `Proficient in JavaScript, TypeScript, HTML, CSS, Angular, Node.js, Express, MongoDB, SQL, Git, and GitHub.
        Familiar with React, Redux, Python, Java, C++, C#, and AWS.
        Understanding of Agile Methodologies, Test Driven Development, and Object Oriented Programming, and Design Patterns
    `,
    imagePath:'assets/about-me-images/computer.png', 
    altImage:'computer'
    },
    {
        title: 'Climbing, Coffee and Clay',
        description: `
        My way to unwind is by hanging out with friends at the rock climbing gym,
        brewing coffee and pottery making. These activities all intersect at understanding how to be mindful
        of every step in the process from sending a climbing project, to making precise measurements for brewing,
        to applying the right amount of pressure when pulling clay`,
      imagePath: 'assets/about-me-images/climbing.png',
      altImage: 'climbing'
    }
]