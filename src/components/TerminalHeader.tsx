import React from 'react';
import { Terminal } from 'lucide-react';

export function TerminalHeader() {
  return (
    <div className="flex items-center gap-2 border-b border-green-500/30 pb-2 mb-4">
      <Terminal className="w-5 h-5" />
      <span className="text-sm">Cagdas's Terminal v1.0.0</span>
      <div className="flex gap-2 ml-auto">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}