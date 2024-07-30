import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import ChatWindow from './components/ChatWindow';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  useEffect(() => {
    // Check if the API key is stored in localStorage
    const apiKey = localStorage.getItem('openaiApiKey');
    if (apiKey) {
      setIsLoggedIn(true); // Set login state to true if the API key is found
    }
  }, []);

  // Function to be called when the user logs in
  const handleLogin = () => {
    setIsLoggedIn(true); // Update state to show the chat window
  };

  return (
    <div className="App">
      {isLoggedIn ? <ChatWindow /> : <Login onLogin={handleLogin} />}
      {/* Render ChatWindow if logged in, otherwise render Login */}
    </div>
  );
};

export default App;