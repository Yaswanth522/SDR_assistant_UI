import React from "react";

const SessionButton = ({ threadId, onStartSession }) => {
  return (
    <button onClick={onStartSession} disabled={threadId}>
      {threadId ? "✅ Session Active" : "▶ Start New Session"}
    </button>
  );
};

export default SessionButton;
