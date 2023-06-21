import { WorkExperience } from "../about-me.model";

export const workExperienceList: WorkExperience[] = [
    {
        title: "Full-Stack Software Engineer At Advisor360",
        company: "Softworld Inc.",
        logo: "assets/about-me-images/company-logos/softworldLogo.avif",
        startDate: new Date("2023-04-10"),
        address: "Waltham, MA",
        bulletpoints: [
            "Worked with a team to identify store procedures in legacy code that were being used and documented findings to be split from CFN",
            "Took initiative to build a UI tool with Angular to help with running Data Analysis on the codebase",
        ]
    },
    {
        title: "Software Engineer I",
        company: "ZoomInfo",
        logo: "assets/about-me-images/company-logos/zoominfoLogo.png",
        startDate: new Date("2021-06-14"),
        endDate: new Date("2023-01-17"),
        address: "Waltham, MA",
        bulletpoints: [
            "Worked as full-stack development on Engage, a B2B sales engagement platform that automates sales workflows and scheduling email campaigns",
            "Integrated the NeverBounce API into Engage’s services to retrieve validations of thousands of emails in seconds, utilizing Redis queues and asynchronous functions for fast and efficient results. Also created visual representations of data, such as charts, to showcase results to clients",
            "Built RestAPI features using Angular 12+, .NET Core 3.1, MSSQL and MongoDB hosted on AWS and GCP. Experience in automated CI/CD deployment with Jenkins to improve platform functionality",
            "Actively participated in pre-grooming sessions and collaborated with product managers, designers, and other team members to ensure that the end product met the needs of clients",
            "Conducted code reviews and ensured adherence to coding standards and best practices., PR environment testing and deployment, and architecture sessions with team leads to ensure high-quality code and product development",
            "Consistently submitted quarterly personal progress reports that involved learning new and up-to-date technologies and methodologies, as well as maintaining scalable and modular code for self-growth and improved platform features",
            "Assisted with the onboarding of new team members and provided training on development processes and tools"
        ]
    },
    {
        title: "Lead Instructor",
        company: "Empow Studio",
        logo: "assets/about-me-images/company-logos/empowStudioLogo.png",
        startDate: new Date("2020-06-15"),
        endDate: new Date("2021-06-14"),
        address: "Lexington, MA",
        bulletpoints: [
            "Instructing weekly camps for children of ages 8-14 using various online programs and programming languages such as Python, Java, C# (Unity), Scratch, and Flowlab to name a few",
            "Creating goals with linear progressive learning curve and adjusting them based on individual’s learning capacities",
            "Sending weekly progress reports to parents and recommending other programs based on their child’s needs, capability and interests"
        ]
    },
    {
        title: "Korean Airlines - Lead Passenger Service Agent",
        company: "Swissport USA",
        address: "Boston, MA",
        startDate: new Date("2018-04-30"),
        endDate: new Date("2020-03-20"),
        logo: "assets/about-me-images/company-logos/swissportLogo.jpg",
        bulletpoints: [
            "Took initiative to develop my personal project ’Flight Tracking App’ designed to automate flight status lookup to ease team workload",
            "Pre-brief preparations for flight preparations for groups, special assistance, or flight inquiries",
            "Briefing, and managing agents and coordinating with airline management for on-time boarding and departure",
            "Checking in and verifying passenger documentation for final destinations and issuing boarding passes"
        ]
    }
]
