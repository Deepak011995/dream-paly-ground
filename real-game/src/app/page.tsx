"use client"
import { useRouter } from "next/navigation";
import Link from "next/link"

export default function Home() {
  const router = useRouter()
  const nev = (name: string):void =>{
    router.push(name)
  }
  return (
    <main>
      <h1>Home</h1>
      <button onClick={()=> nev("/contact")}>Go to Contact</button>
      <br/>
      <Link href="/about">About</Link>
      <br/>
      <Link href="/login">Login</Link>
    </main>
  );
}
