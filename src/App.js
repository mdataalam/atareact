import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
 
const App = () => {
  const [message, setMessage] = useState('');
 
  // Function to handle button click and fetch message from backend
  const handleClick = () => {
    // Make a GET request to the backend endpoint
    axios.get('http://localhost:5001/api/message')
      .then(response => {
        // Set the message state with the response from the backend
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <button onClick={handleClick}>Fetch Message from Backend</button>
        {message && <p>Message from backend: {message}</p>}
      </header>
    </div>
  );
};
 
export default App;