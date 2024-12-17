import React, { useState } from "react";
import axios from "axios";
import "./styles.css"; // Import the external CSS

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", text: "Hello! Ask me anything about blood pressure." },
  ]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = { sender: "user", text: userInput };
    setChatHistory([...chatHistory, newUserMessage]);
    setLoading(true);

    try {
      const botResponse = await getGeminiResponse(userInput);
      const newBotMessage = { sender: "bot", text: botResponse };

      setChatHistory((prevHistory) => [...prevHistory, newBotMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        sender: "bot",
        text: "Oops! Something went wrong. Please try again later.",
      };
      setChatHistory((prevHistory) => [...prevHistory, errorMessage]);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  const getGeminiResponse = async (input) => {
    const API_KEY = "AIzaSyCcjZFid6ugQ9bxTgWsZTrAXRNJ7-i0peo"; // Replace with your API Key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

    const requestBody = {
      contents: [{ parts: [{ text: input }] }],
    };

    const response = await axios.post(url, requestBody, {
      headers: { "Content-Type": "application/json" },
    });

    // Parse and return the response
    const reply =
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that.";
    return reply;
  };

  return (
    <div className="chatbot-container">
      <h3>Chat with Me!</h3>
      <div className="chatbox">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            style={{ textAlign: msg.sender === "bot" ? "left" : "right" }}
          >
            <span className={`message ${msg.sender}`}>{msg.text}</span>
          </div>
        ))}
        {loading && <div className="message bot">Thinking...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Ask me about blood pressure..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
