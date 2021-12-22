import React, { useEffect, useState, useRef, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../../index';
import { CONNECTION } from '../../../util/constants';
import { ChatField, InputMessage } from '../../molecules';

import { UsersList } from '../../molecules';

import './index.scss';

const Chat = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const [messages, setMessages] = useState([]);
  const [userList, setUserList] = useState([]);

  const socket = useRef();

  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:5000');

    socket.current.onopen = function () {
      const message = {
        event: CONNECTION,
        id: user.uid,
        username: user.displayName,
      };

      socket.current.send(JSON.stringify(message));
    };

    socket.current.onmessage = function (event) {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    socket.current.onclose = function () {};
  }, []);

  return (
    <section className="chat">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12">
            <ChatField messages={messages} />
            <InputMessage socket={socket.current} user={user} />
          </div>
          <div className="col-lg-3">
            <UsersList userList={userList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
