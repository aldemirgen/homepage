import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-6">
      <a
        href="https://github.com/aldemirgen"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-400 transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/cagdas-aldemir-36169583/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-400 transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:cagdas@aldemir.tr"
        className="text-green-500 hover:text-green-400 transition-colors"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
}