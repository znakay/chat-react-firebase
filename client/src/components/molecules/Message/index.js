import React from 'react';
import { CONNECTION, DISCONNECT, MESSAGE } from '../../../util/constants';

import './index.scss';

const Message = ({ message }) => {
  switch (message.event) {
    case CONNECTION:
      return <div className="message__connected">{message.username} join</div>;
    case MESSAGE:
      return (
        <div className="message">
          <div className="message__info">
            <p className="message__name">{message.username}</p>
            <p className="message__content">{message.message}</p>
          </div>
        </div>
      );
    case DISCONNECT:
      return <div className="message__disconnected">{message.username} leave</div>;
    default:
      return;
  }
};

export default Message;
