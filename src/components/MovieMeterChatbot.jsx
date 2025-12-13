import React, { useState, useRef, useEffect } from 'react';
import { Send, Film, User, Popcorn } from 'lucide-react';
import './MovieMeter.css';

export default function MovieMeterChatbot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '🎬 Welcome to Movie Meter! I\'m your personal film expert. Ask me about any movie, get recommendations, or discuss your favorite films!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Add your Gemini API key here
  const GEMINI_API_KEY = 'YOUR_API_KEY_HERE';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are Movie Meter, an enthusiastic and knowledgeable movie expert AI. Help users discover films, provide movie recommendations, discuss plots, actors, directors, and share interesting movie trivia. Be engaging and passionate about cinema. Keep responses conversational and fun.\n\nUser: ${userMessage}`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.8,
              maxOutputTokens: 600,
            }
          })
        }
      );

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: '🎬 Oops! Having some technical difficulties. Let\'s try that again!'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="movie-meter-container">
      {/* Header with Film Strip Design */}
      <div className="movie-header">
        <div className="film-strip-top"></div>
        <div className="header-content">
          <div className="logo-badge">
            <Film size={32} />
          </div>
          <div className="header-text">
            <h1 className="movie-title">Movie Meter</h1>
            <p className="movie-subtitle">🍿 Your Personal Cinema Companion</p>
          </div>
          <div className="popcorn-icon">
            <Popcorn size={28} />
          </div>
        </div>
        <div className="film-strip-bottom"></div>
      </div>

      {/* Chat Messages */}
      <div className="chat-area">
        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-row ${message.role === 'user' ? 'user-row' : 'assistant-row'}`}
            >
              <div className={`avatar ${message.role === 'user' ? 'user-avatar' : 'assistant-avatar'}`}>
                {message.role === 'user' ? (
                  <User size={20} />
                ) : (
                  <Film size={20} />
                )}
              </div>

              <div className={`message-bubble ${message.role === 'user' ? 'user-bubble' : 'assistant-bubble'}`}>
                <p>{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="message-row assistant-row">
              <div className="avatar assistant-avatar">
                <Film size={20} />
              </div>
              <div className="message-bubble assistant-bubble">
                <div className="typing-indicator">
                  <div className="reel"></div>
                  <div className="reel"></div>
                  <div className="reel"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="input-area">
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about any movie or get recommendations..."
            className="message-input"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="send-button"
          >
            <Send size={24} />
          </button>
        </div>
        <p className="tagline">
          🎥 Lights, Camera, Chat! Discover your next favorite film
        </p>
      </div>
    </div>
  );
}