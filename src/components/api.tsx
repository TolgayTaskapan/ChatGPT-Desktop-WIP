import axios from 'axios';

// Function to get the API key from localStorage
const getOpenAIApiKey = () => {
  return localStorage.getItem('openaiApiKey');
};

// Function to send a message to the OpenAI API
export const sendMessageToOpenAI = async (message: string) => {
  const apiKey = getOpenAIApiKey(); // Retrieve the API key
  if (!apiKey) {
    throw new Error('API key not found');
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        prompt: message,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`, // Include the API key in the request headers
        },
      }
    );
    return response.data.choices[0].text; // Return the response text
  } catch (error) {
    console.error(error);
    return 'Error in API call'; // Return an error message if the API call fails
  }
};