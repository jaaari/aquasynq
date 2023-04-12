import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const LandingPage = () => {
  const [roomName, setRoomName] = useState('');
  const navigate = useNavigate();

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const joinRoom = () => {
    if (roomName.trim() !== '') {
      navigate(`/chatroom/${roomName}`);
    }
  };

  return (
    <div>
      <h1>Welcome to AquaTalka</h1>
      <input
        type="text"
        placeholder="Enter room name"
        value={roomName}
        onChange={handleRoomNameChange}
      />
      <button onClick={joinRoom}>Join Room</button>
        <p>
            <Link to="/signin">Sign in</Link> to save your chat history and manage your chatrooms.
        </p>
    </div>
  );
};

export default LandingPage;
