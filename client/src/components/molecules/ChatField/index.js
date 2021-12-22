import React from 'react';
import Message from '../Message';

const ChatField = ({ messages }) => {
  return (
    <div className="chat__field">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatField;
