import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

// SocialIcons component
export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
      >
        <FaGithub className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:hello@himruzz.me"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
      >
        <FaEnvelope className="w-6 h-6" />
      </a>
    </div>
  );
}