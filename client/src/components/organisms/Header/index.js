import React, { useContext } from 'react';
import { Context } from '../../../index';

import { useAuthState } from 'react-firebase-hooks/auth';

import './index.scss';

const Header = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <h1 className="header__title">Live Chat</h1>
              {user ? (
                <button className="button button_sign-out header__button" onClick={() => auth.signOut()}>
                  Sign Out
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
