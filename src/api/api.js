// import axios from 'axios';

// // Function to send data to the backend
// export const sendDataToBackend = async (data) => {
//   try {
//     const response = await axios.post('http://localhost:5000', data, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error sending data to the backend:', error);
//     throw error;
//   }
// };

import axios from 'axios';

// Load the backend base URL from environment variables
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000' || 'http://localhost:10000';

// Function to send data to the backend
export const sendDataToBackend = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/data`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending data to the backend:', error);
    throw error;
  }
};
