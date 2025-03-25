import React, { useState } from "react";

const QuestionInput = ({ onAskQuestion, loading }) => {
  const [question, setQuestion] = useState("");

  const handleAsk = () => {
    if (question.trim()) {
      onAskQuestion(question);
      setQuestion("");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        onKeyDown={(e) => e.key === "Enter" && handleAsk()}
        style={{ width: "60%", padding: "8px" }}
      />
      <button onClick={handleAsk} disabled={loading} style={{ marginLeft: "10px" }}>
        {loading ? "⏳ Fetching..." : "🟢 Ask"}
      </button>
    </div>
  );
};

export default QuestionInput;
