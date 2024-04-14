import { useState } from "react"

export default function Auth() {

    const [logInView, setLogInView] = useState(true)

    return <>
        {
            logInView ?
                <div className="w-screen">
                    LogIn Page, Dont have an account ? <button onClick={() => setLogInView(false)}>Sign Up</button>
                </div>
                :
                <div>
                    SignUp Page, Already a user ? <button onClick={() => setLogInView(true)}>Log In</button>
                </div>
        }

    </>
}