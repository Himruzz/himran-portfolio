export interface Experience {
    id: number;
    company: string;
    role: string;
    duration: string;
    description: string;
    skills?: string[]; // Optional: List of skills gained
  }
  
  export const experiences: Experience[] = [
    {
      id: 1,
      company: 'Upcode Software Labs',
      role: 'MERN Stack Developer (Master\'s Internship)',
      duration: 'July 2024 - Ongoing',
      description:
        'Proficient in MERN stack (MongoDB, Express.js, React.js, Node.js) for full-stack web development. Strong understanding of RESTful API development and version control (Git).',
      skills: [
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js',
        'RESTful APIs',
        'Git',
      ],
    },
    // Add more experiences here
  ];