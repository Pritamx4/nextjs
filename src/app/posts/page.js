"use client"
import React, { useEffect, useState } from 'react'
9552
const  revalidate = 20;

const Posts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      setData(posts)
    }
    fetchPosts()
  }, [])

  return (
    <div>
        <h1>Posts</h1>
        <hr />
        <ul>{data.map((post) => (
            <li key={post.id}>
                <h1>post no.{post.id}</h1>
                <h2>{post.title}</h2>
                <p>{post.body}</p>            </li>
        ))}
    </ul>
    </div>
  )
}

export default Posts