import React from 'react';

interface FileUploadProps {
  onFileUpload: (file: File) => void; // Function to send the uploaded file to the parent component
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      onFileUpload(files[0]); // Send the selected file to the parent component
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} /> {/* Input for file selection */}
    </div>
  );
};

export default FileUpload;