import React from 'react';

// Define the Experience type
export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  skills?: string[]; // Optional: List of skills gained
}

// ExperienceCard component
export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800">{experience.role}</h3>
      <p className="mt-2 text-sm text-gray-600">
        {experience.company} | {experience.duration}
      </p>
      <p className="mt-4 text-gray-700">{experience.description}</p>
      {experience.skills && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-800">Skills Gained:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}