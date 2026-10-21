"use client"
import {useState} from 'react'


const Reaction = () => {

    const [likes, setLikes] = useState(0);

    const likePost = async () => {
        setLikes(likes + 1);
        const response = await fetch('/api/reaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: 1, name: 'User liked the post' }),
        });
    }
    const unlikePost = async () => {
        setLikes(likes - 1);
        const response = await fetch('/api/reaction', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({ id: 2, name: 'User disliked the post' }),
        });
    }
  return (
    <div>
        <h1>Reaction</h1>
        <p>Likes: {likes}</p>
        <button onClick={likes ? unlikePost : likePost}>{likes ? "❤️" : "💔"}</button>
    </div>
  )
}

export default Reaction