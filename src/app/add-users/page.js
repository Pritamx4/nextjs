"use client"

import {  useState } from 'react'
const AddUsers = () => {
    const [users, setUsers] = useState([]);
    async function addUser() {
        const response = await fetch("/api/hello", {
            method: "POST",
            body: JSON.stringify({
                id: 3,
                name: "Pritam Singh",
            }),
        });
        const data = await response.json();
        setUsers(data.data);
    }

    return (
    <div>
      <button onClick={addUser}>Add User</button>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default AddUsers