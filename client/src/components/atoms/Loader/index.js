import React from 'react';

import './index.scss';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__roller">
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
    </div>
  );
};

export default Loader;
