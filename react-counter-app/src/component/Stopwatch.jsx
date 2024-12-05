import React, { useState } from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);

  function handleStartStop() {
    setIsRunning((prev) => !prev); // Fix syntax for toggling state
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Status: {isRunning ? 'Running' : 'Stopped'}</p> {/* Display status */}
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Stopwatch;
