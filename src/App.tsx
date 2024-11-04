import React from 'react';
import { Terminal } from './components/Terminal';
import { SocialLinks } from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-500 p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <Terminal />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;