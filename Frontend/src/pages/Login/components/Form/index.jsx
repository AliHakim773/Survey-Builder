import React, { useState } from "react"
import "./styles.css"
import Input from "../../../../components/Input"
import Button from "../../../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import Error from "../../../../components/Error"
import { errorBlink } from "../../../../core/utilities/errorBlink"
import { useDispatch } from "react-redux"
import { setUser } from "../../../../core/redux/userSlice/userSlice"
import { sendRequest } from "../../../../core/axios"

const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [error, setError] = useState({ msg: "", hidden: true })
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })
    const HandleOnInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleLogin = async () => {
        if (credentials.username === "" || credentials.password === "") {
            errorBlink(setError, "username and password cant be empty")
            return
        }
        console.log(credentials)
        try {
            const res = await sendRequest({
                route: "/auth/login",
                method: "POST",
                body: credentials,
            })
            console.log(res)
            dispatch(setUser(res.user))
            // navigate("/register")
        } catch (e) {
            errorBlink(setError, "wrong username or password")
        }
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
                <Button text='Login' type='submit' onClick={handleLogin} />
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
