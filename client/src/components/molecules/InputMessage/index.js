import React, { useState } from 'react';

import './index.scss';

const InputMessage = ({ socket, user }) => {
  const [messageValue, setMessageValue] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();

    if (!messageValue.trim()) {
      return;
    }

    const message = {
      event: 'message',
      id: Date.now(),
      username: user.displayName,
      message: messageValue.trim(),
    };

    socket.send(JSON.stringify(message));
    setMessageValue('');
  };

  const onPressEnter = (event) => {
    if (event.key === 'Enter') {
      sendMessage(event);
    }
  };

  return (
    <form onSubmit={sendMessage} className="input-message">
      <textarea
        onChange={(e) => setMessageValue(e.target.value)}
        value={messageValue}
        onKeyPress={onPressEnter}
        className="input-message__field"
        placeholder="Input message"
      />
      <button type="submit" className="input-message__send button button_send">
        Send
      </button>
    </form>
  );
};

export default InputMessage;
