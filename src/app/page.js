import Image from "next/image";
import Link from "next/link";
import Posts from "../app/posts/[id]/page"

export default function Home() {
  return (
    <div>
     <Posts name="pritam" />
    </div>
  );
}
