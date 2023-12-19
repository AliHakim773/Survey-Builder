import React, { useState } from "react"
import "./styles.css"
import Input from "../../../../components/Input"
import Button from "../../../../components/Button"
import { Link } from "react-router-dom"
import Error from "../../../../components/Error"

const Form = () => {
    const [error, setError] = useState({ msg: "", hidden: true })
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })
    const HandleOnInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleLogin = () => {
        if (credentials.username === "" || credentials.password === "") {
            setError({
                hidden: false,
                msg: "username and password cant be empty",
            })
            setTimeout(() => {
                setError({
                    hidden: true,
                    msg: "",
                })
            }, 5000)
            return
        }
        console.log(credentials)
    }

    return (
        <form className='login-form'>
            <Error msg={error.msg} hidden={error.hidden} />
            <div className='login-item'>
                <Input
                    text={"Username"}
                    name={"username"}
                    handleChange={HandleOnInputChange}
                    value={credentials.username}
                />
            </div>
            <div className='login-item'>
                <Input
                    text={"Password"}
                    name={"password"}
                    type={"password"}
                    handleChange={HandleOnInputChange}
                    value={credentials.password}
                />
            </div>
            <div className='login-item'>
                <Button text='Login' onClick={handleLogin} />
                <small className='semi-bold'>
                    Dont have an account?
                    <Link className='link' to='/register'>
                        {" "}
                        Register here
                    </Link>
                </small>
            </div>
        </form>
    )
}

export default Form
