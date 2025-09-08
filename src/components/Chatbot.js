import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const appendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const getBotResponse = async (message) => {
    const apiKey = "AIzaSyCW0tn_yibVIvbV1TgyXosN7IFXejMYodY";  
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { role: "user", parts: [{ text: message }] }
          ],
          systemInstruction: {
            role: "system",
            parts: [
              {
                text: "You are a helpful travel assistant. Only answer travel-related questions (destinations, flights, hotels,Tripnest, tips, etc.). If the user asks anything unrelated to travel, politely reply: '⚠️ Sorry, I can only help with travel-related questions.'"
              }
            ]
          }
        })
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response from Gemini";
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "⚠️ Error: " + error.message;
    }
  };

  const handleSendMessage = async () => {
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    appendMessage("user", userMessage);
    setInputValue("");

    const botReply = await getBotResponse(userMessage);
    appendMessage("bot", botReply);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <>
      {/* Floating Chat Icon */}
      {!isOpen && (
        <div
          id="chatbot-icon"
          onClick={toggleChatbot}
          style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}
        >
          💬
        </div>
      )}

      {/* Chatbot Container */}
      {isOpen && (
        <div
          id="chatbot-container"
          style={{ position: "fixed", bottom: "80px", right: "20px", zIndex: 9999 }}
        >
          <div id="chatbot-header">
            <span>Your Travel Assistant✈️</span>
            <button id="close-btn" onClick={toggleChatbot}>
              &times;
            </button>
          </div>
          <div id="chatbot-body">
            <div id="chatbot-messages">
              {messages.map((m, i) => (
                <div key={i} className={`message ${m.sender}`}>
                  {m.text}
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>
          </div>
          <div id="chatbot-input-container">
            <input
              type="text"
              id="chatbot-input"
              placeholder="Ask Tripnest Anything..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button id="send-btn" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
