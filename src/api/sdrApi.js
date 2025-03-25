const API_BASE_URL = "https://sdr-assistant.onrender.com";

// 🔹 Start a new session
export const startSession = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/start-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`Server error: ${res.status}`);

    return await res.json();
  } catch (err) {
    console.error("Error starting session:", err);
    throw err;
  }
};

// 🔹 Ask a question
export const askQuestion = async (threadId, question) => {
  try {
    const res = await fetch(`${API_BASE_URL}/ask-question`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ thread_id: threadId, question }),
    });

    if (!res.ok) throw new Error(`Server error: ${res.status}`);

    const data = await res.json();
    if (data.error) throw new Error(`Error from API: ${data.error}`);

    // Remove ** from response before displaying
    return data.response.replace(/\*\*/g, "");
  } catch (err) {
    console.error("Error fetching response:", err);
    throw err;
  }
};
