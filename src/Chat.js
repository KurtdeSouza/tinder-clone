import React from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";
const Chat = ({ name, message, profilePic, timestamp }) => {
  return (
    <div className="Chat">
      <Avatar className="chat__image" alt={name} src={profilePic} />
      <div className="chat__details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </div>
  );
};

export default Chat;
