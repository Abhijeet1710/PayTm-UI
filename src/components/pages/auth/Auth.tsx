import { useState } from "react"
import { Button } from "../../common/button"


export default function Auth(props: any) {
    const [logInView, setLogInView] = useState(true)

    const logeInFunction = () => {
        props.onSignin()
    }    

    return <>
        {
            logInView ?
                <div className="w-screen">
                    LogIn Page <Button onClick={logeInFunction} children={"Log In"}/>, Dont have an account ? <button onClick={() => setLogInView(false)}>Sign Up</button>
                </div>
                :
                <div>
                    SignUp Page, Already a user ? <button onClick={() => setLogInView(true)}>Log In</button>
                </div>
        }

    </>
}