import React, { useState } from 'react';

function Hook1() {
  const [name, setName] = useState({ firstname: '', lastname: '' });

  const handleFirstNameChange = (e) => {
    setName({ ...name, firstname: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setName({ ...name, lastname: e.target.value });
  };

  return (
    <form>
      <input
        type="text"
        value={name.firstname}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={handleLastNameChange}
      />
      <h2>Your firstname is - {name.firstname}</h2>
      <h2>Your lastname is - {name.lastname}</h2>
    </form>
  );
}

export default Hook1;
