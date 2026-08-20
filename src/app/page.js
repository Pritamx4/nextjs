"use client";
import Image from "next/image";
import Link from "next/link";
import Posts from "../app/posts/[id]/page"
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const [like, setLike] = useState(true)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}className="h-12 w-32 bg-blue-500 text-2xl text-white m-5">Increment</button>
      <button onClick={decrement}className="h-12 w-32 bg-blue-500 text-2xl text-white m-5">Decrement</button>
      <hr />
      <p className="text-5xl">{like ? "❤️" : "💔"}</p>
      <button onClick={() => setLike(!like)}className="h-12 w-32 bg-green-500 text-2xl text-white m-5">Toggle Like</button>
    </div>
  );
}