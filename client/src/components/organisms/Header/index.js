import React, { useContext } from 'react';
import { Context } from '../../../index';

import { useAuthState } from 'react-firebase-hooks/auth';

import { DISCONNECT } from '../../../util/constants';

import './index.scss';

const Header = () => {
  const { auth, socket } = useContext(Context);
  const [user] = useAuthState(auth);

  const exit = () => {
    auth.signOut();

    const message = {
      event: DISCONNECT,
      id: user.uid,
      username: user.displayName,
    };

    socket.send(JSON.stringify(message));
  }

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <h1 className="header__title">Live Chat</h1>
              {user && (
                <button className="button button_sign-out header__button" onClick={() => exit()}>
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
