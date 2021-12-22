import React from 'react';

const UsersList = ({userList}) => {
  return (
    <div className="user-list">
      <h3>Online</h3>
      {userList.map((user, i) => (
        <p key={i} className="user__name">{user}</p>
      ))}
    </div>
  );
};

export default UsersList;
