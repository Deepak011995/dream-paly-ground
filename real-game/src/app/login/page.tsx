import Link from "next/link"
import "./login.css"

function Login(){
    return (
        <main>
        <h1>Login Student</h1>
        <Link href="/">Home</Link>
        <div className="login_btn">
            <div>
                <Link href="/loginStudent">LoginStudent</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, qui?</p>
            </div>
            <div>
                <Link href="/loginTeacher">LoginTeacher</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, qui?</p>
            </div>
        </div>
        </main>
    )
    
}

export default Login;