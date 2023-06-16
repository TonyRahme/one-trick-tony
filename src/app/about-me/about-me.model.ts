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
}

export interface WorkExperience extends Project {
    startDate: Date;
    endDate: Date;
    company: string;
    address: string;
    logo: string;
}