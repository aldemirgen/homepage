import { Dispatch, SetStateAction } from 'react';

export function useTerminalCommands(
  setCommandHistory: Dispatch<SetStateAction<string[]>>
) {
  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let response = '';

    switch (command) {
      case 'help':
        response = `
Available commands:
- about: Display developer information
- skills: List technical skills
- contact: Show contact information
- clear: Clear terminal
- github: Open GitHub profile
- linkedin: Open LinkedIn profile`;
        break;
      case 'about':
        response = `
NAME: Cagdas Aldemir
ROLE: Software Developer
STATUS: Available for interesting projects

I'm a passionate software developer focused on creating 
efficient and scalable solutions. I enjoy tackling complex 
problems and continuously learning new technologies.`;
        break;
      case 'skills':
        response = `
TECHNICAL EXPERTISE:
└── Languages & Frameworks
    └── C#
    └── .NET Core
    └── JavaScript/TypeScript
    └── React
    └── Node.js

DEVELOPMENT TOOLS:
└── Git
└── VS Code
└── Visual Studio
└── Docker

DATABASE SYSTEMS:
└── SQL Server
└── MongoDB
└── PostgreSQL`;
        break;
      case 'contact':
        response = `
EMAIL: cagdas@aldemir.tr
LINKEDIN: linkedin.com/in/cagdas-aldemir-36169583
GITHUB: github.com/aldemirgen

Feel free to reach out for collaborations or opportunities!`;
        break;
      case 'clear':
        setCommandHistory([]);
        return;
      case 'github':
        window.open('https://github.com/aldemirgen', '_blank');
        response = 'Opening GitHub profile...';
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/cagdas-aldemir-36169583/', '_blank');
        response = 'Opening LinkedIn profile...';
        break;
      default:
        response = `Command not recognized: ${command}. Type 'help' for available commands.`;
    }
    setCommandHistory(prev => [...prev, `C:\\> ${cmd}`, response]);
  };

  return { handleCommand };
}