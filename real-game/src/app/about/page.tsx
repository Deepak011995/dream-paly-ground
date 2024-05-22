import Link from "next/link"

function About(){
    return (
        <main>
        <h1>About Student</h1>
        <Link href="/">Home</Link>
        <br/>
        <Link href="/login">Login</Link>
        </main>
    )
    
}

export default About;