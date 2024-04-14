import { useState } from "react"
import { Button } from "../../common/button"
import { useNavigate } from "react-router"


export default function Auth(props: any) {
    const [logInView, setLogInView] = useState(true)
    const navigate = useNavigate()

    if(localStorage.getItem("PayTm_UserDetails") == "true") {
        navigate("/home")
    }

    const logeInFunction = () => {
        props.onSignin()
    }    

    return <div className="w-100 h-100">
        {
            logInView ?
                <div className="mainBg">
                    LogIn Page <Button onClick={logeInFunction} children={"Log In"}/>, Dont have an account ? <button onClick={() => setLogInView(false)}>Sign Up</button>
                </div>
                :
                <div>
                    SignUp Page, Already a user ? <button onClick={() => setLogInView(true)}>Log In</button>
                </div>
        }

    </div>
}