"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const nev = (name: string):void =>{
    router.push(name)
  }
  return (
    <main>
      <h1>Home</h1>
      <button onClick={()=> nev("/contact")}>Go to Contact</button>
    </main>
  );
}
