import { Skill } from "./skills.model";

export const skillsConfig: Skill[] = [
    {
        title: 'Design & Development',
        description: `My exposure to coding was through game development. 
    When I was 12 years old I stumbled upon a game engine that allowed me to learn coding.
    From then on my facination in computers grew!
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