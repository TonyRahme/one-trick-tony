export class Skill {
    constructor(
        public title: string,
        public description: string,
        public imagePath: string,
        public altImage: string) {}
  }

export interface Project {
    title: string;
    bulletpoints: string[];
    startDate: Date;
    endDate?: Date;
}

export interface WorkExperience extends Project {
    company: string;
    address: string;
    logo: string;
}

export interface Education {
    school: string;
    degree: string;
    startYear: number;
    endYear?: number;
    logo: string;
}