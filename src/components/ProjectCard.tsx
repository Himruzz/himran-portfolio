import React from 'react';

// Define the Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string; // Optional: Project image
  link?: string;  // Optional: Link to the project
}

// ProjectCard component
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <h3 className="text-xl font-bold text-gray-800 mt-4">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  );
}