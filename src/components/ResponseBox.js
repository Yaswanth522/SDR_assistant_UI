import React from "react";

const ResponseBox = ({ response }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        background: "#f9f9f9",
        borderRadius: "5px",
      }}
    >
      <h4>Response:</h4>
      <p style={{ whiteSpace: "pre-line" }}>{response}</p> {/* ✅ Handles \n for line breaks */}
    </div>
  );
};

export default ResponseBox;
