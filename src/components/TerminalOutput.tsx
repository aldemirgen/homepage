import React from 'react';

interface TerminalOutputProps {
  text: string;
}

export function TerminalOutput({ text }: TerminalOutputProps) {
  return (
    <pre className="whitespace-pre-wrap">{text}</pre>
  );
}