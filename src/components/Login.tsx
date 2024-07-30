import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void; // Function to be called after successful login
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [apiKey, setApiKey] = useState(''); // State to store the API key input

  // Function to handle the login process
  const handleLogin = () => {
    if (apiKey.trim()) {
      // Save the API key in localStorage
      localStorage.setItem('openaiApiKey', apiKey);
      onLogin(); // Notify parent component that the user has logged in
    } else {
      alert('Please enter a valid API key.'); // Alert if the API key is empty
    }
  };

  return (
    <div className="login">
      <h2>Enter Your OpenAI API Key</h2>
      <input
        type="password"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)} // Update state on input change
        placeholder="API Key"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;