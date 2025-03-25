import React, { useState } from "react";

const SessionButton = ({ onStartSession, threadId }) => {
  const [starting, setStarting] = useState(false);

  const handleClick = async () => {
    setStarting(true); // Disable button while session is starting
    await onStartSession();
    setStarting(false); // Enable after session is created
  };

  return (
    <button onClick={handleClick} disabled={threadId || starting}>
      {threadId ? "✅ Session Active" : starting ? "⏳ Starting Session..." : "▶ Start New Session"}
    </button>
  );
};

export default SessionButton;
