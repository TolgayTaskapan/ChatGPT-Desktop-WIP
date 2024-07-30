import React, { useState } from 'react';

interface MessageInputProps {
  onSendMessage: (message: string) => void; // Function to send the message to the parent component
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState(''); // State to store the input message

  // Function to handle the send button click
  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message); // Send the message to the parent component
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Update state on input change
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button> {/* Button to send the message */}
    </div>
  );
};

export default MessageInput;