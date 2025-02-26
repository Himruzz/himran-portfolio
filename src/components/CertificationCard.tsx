import React from 'react';

// Define the Certification type
export interface Certification {
  id: number;
  title: string;
  issuer: string;
  description: string;
}

// CertificationCard component
export default function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800">{certification.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{certification.issuer}</p>
      <p className="mt-4 text-gray-700">{certification.description}</p>
    </div>
  );
}