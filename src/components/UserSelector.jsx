import React, { useCallback } from 'react';

const UserSelector = ({ users, onSelectUser }) => {
  const handleSelectUser = useCallback((event) => {
    onSelectUser(event.target.value);
  }, [onSelectUser]);

  return (
    <select onChange={handleSelectUser}>
      <option value="">Select a user</option>
      {users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelector;
