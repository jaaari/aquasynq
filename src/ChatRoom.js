import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ChatRoom = () => {
  const { roomName } = useParams();
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    // Implement message sending functionality here
  };

  return (
    <div>
      <h1>Chatroom: {roomName}</h1>
      <div>
        {/* Display chat messages here */}
      </div>
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={handleMessageChange}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
