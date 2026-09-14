"use client"
import React, { useEffect, useState } from 'react'

// const  revalidate = 20;

const Users = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      {
        cache: 'no-store' //cashe:"force-cache" //cache:"no-store"
      }
      const users = await response.json()
      setData(users)
    }
    fetchUsers()
  }, [])

  return (
    <div>
        <h1>Users</h1>
        <hr />
        <ul>{data.map((users) => (
            <li key={users.id}>
                <h1>user no.{users.id}</h1>
                <h2>{users.name}</h2>
                <p>{users.email}</p>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default Users