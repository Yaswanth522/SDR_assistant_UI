import React, { useState } from "react";
import { startSession, askQuestion } from "./api/sdrApi";
import SessionButton from "./components/SessionButton";
import QuestionInput from "./components/QuestionInput";
import ResponseBox from "./components/ResponseBox";

const App = () => {
  const [threadId, setThreadId] = useState(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Start session handler
  const handleStartSession = async () => {
    try {
      const data = await startSession();
      setThreadId(data.thread_id);
      alert("✅ New session started!");
    } catch {
      alert("❌ Failed to start session.");
    }
  };

  // Ask question handler
  const handleAskQuestion = async (question) => {
    if (!threadId) {
      alert("⚠️ Start a session first.");
      return;
    }

    setLoading(true);
    try {
      const response = await askQuestion(threadId, question);
      setResponse(response || "⚠️ No response received.");
    } catch {
      alert("❌ Something went wrong. Check backend logs.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>OpenAI SDR Assistant</h2>
      <SessionButton threadId={threadId} onStartSession={handleStartSession} />
      <QuestionInput onAskQuestion={handleAskQuestion} loading={loading} />
      <ResponseBox response={response} />
    </div>
  );
};

export default App;
