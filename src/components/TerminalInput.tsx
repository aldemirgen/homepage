import React from 'react';

interface TerminalInputProps {
  currentCommand: string;
  setCurrentCommand: (command: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

export function TerminalInput({ currentCommand, setCurrentCommand, onKeyPress }: TerminalInputProps) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <span>C:\&gt;</span>
      <input
        type="text"
        value={currentCommand}
        onChange={(e) => setCurrentCommand(e.target.value)}
        onKeyPress={onKeyPress}
        className="flex-1 bg-transparent border-none outline-none text-green-500"
        autoFocus
      />
      <span className="w-2 h-5 bg-green-500 animate-blink"></span>
    </div>
  );
}