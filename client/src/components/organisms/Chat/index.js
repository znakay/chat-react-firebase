import React, { useEffect, useState, useRef, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../../index';
import { CONNECTION } from '../../../util/constants';
import { ChatField, InputMessage } from '../../molecules';

import { UsersList } from '../../molecules';

import './index.scss';

const Chat = () => {
  const { auth, socket } = useContext(Context);
  const [user] = useAuthState(auth);

  const [messages, setMessages] = useState([]);
  const [userList, setUserList] = useState([]);

  const openConnection = () => {
    const message = {
      event: CONNECTION,
      id: user.uid,
      username: user.displayName,
    };

    socket.send(JSON.stringify(message));
  }

  useEffect(() => {
    openConnection();

    socket.onmessage = function (event) {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    socket.onclose = function () { 
      console.log('server closed');
    };
  }, []);

  return (
    <section className="chat">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12">
            <ChatField messages={messages} />
            <InputMessage socket={socket} user={user} />
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
