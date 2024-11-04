import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { TerminalHeader } from './TerminalHeader';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { useTerminalCommands } from '../hooks/useTerminalCommands';
import { useTypewriter } from '../hooks/useTypewriter';

export function Terminal() {
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { handleCommand } = useTerminalCommands(setCommandHistory);
  const { text } = useTypewriter(`C:\\> Loading system modules...
C:\\> Initializing developer profile...
C:\\> Welcome to Cagdas's terminal. Type 'help' for available commands.`);

  useEffect(() => {
    if (terminalRef.current) {
      const targetScroll = terminalRef.current.scrollHeight - terminalRef.current.clientHeight;
      const startScroll = terminalRef.current.scrollTop;
      const startTime = performance.now();
      const duration = 500; // 500ms for smooth scroll

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        if (terminalRef.current) {
          terminalRef.current.scrollTop = startScroll + (targetScroll - startScroll) * easeOutCubic;
        }

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  }, [text, commandHistory]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  return (
    <div className="bg-black border border-green-500 rounded-lg p-4 shadow-lg shadow-green-500/20">
      <TerminalHeader />
      
      <div ref={terminalRef} className="h-[600px] overflow-y-auto custom-scrollbar">
        <TerminalOutput text={text} />
        
        {commandHistory.map((line, index) => (
          <div key={index} className="my-1">
            <pre className="whitespace-pre-wrap">{line}</pre>
          </div>
        ))}

        <TerminalInput
          currentCommand={currentCommand}
          setCurrentCommand={setCurrentCommand}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}