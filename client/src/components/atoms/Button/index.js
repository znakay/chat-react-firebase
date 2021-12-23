import React from 'react';

import './index.scss';

const Button = props => {
  const {className, title, type } = props;

  return (
    <button className={className} type={type}>{title}</button>
  );
};

export default Button;

Button.defaultProps = {
  className: '',
  type: 'button',
};