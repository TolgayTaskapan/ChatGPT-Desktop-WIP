import React, { useState } from 'react';
import MessageInput from './MessageInput';
import FileUpload from './FileUpload';

const ChatWindow: React.FC = () => {
  // State to store messages, which can be text or file
  const [messages, setMessages] = useState<Array<{ type: string, content: string | File }>>([]);

  // Function to handle sending a text message
  const handleSendMessage = (message: string) => {
    setMessages((prev) => [...prev, { type: 'text', content: message }]);
  };

  // Function to handle uploading a file
  const handleFileUpload = (file: File) => {
    setMessages((prev) => [...prev, { type: 'file', content: file }]);
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg.type === 'text' ? (
              <p>{msg.content as string}</p> // Explicitly assert content as string
            ) : (
              // Create a link to the uploaded file
              <a href={URL.createObjectURL(msg.content as File)} target="_blank" rel="noopener noreferrer">
                {(msg.content as File).name}
              </a>
            )}
          </div>
        ))}
      </div>
      <MessageInput onSendMessage={handleSendMessage} /> {/* Input for sending text messages */}
      <FileUpload onFileUpload={handleFileUpload} /> {/* Input for uploading files */}
    </div>
  );
};

export default ChatWindow;