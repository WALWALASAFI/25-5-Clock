import React from 'react';
import BreakControls from './components/BreakControls';
import SessionControls from './components/SessionControls';
import Timer from './components/Timer';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="text-xl font-bold mb-4">25 + 5 Clock</div>
      <div className="mb-4">
        <div id="break-label" className="text-lg font-semibold">Break Length</div>
        <BreakControls />
      </div>
      <div className="mb-4">
        <div id="session-label" className="text-lg font-semibold">Session Length</div>
        <SessionControls />
      </div>
      <Timer />
    </div>
  );
};

export default App;
