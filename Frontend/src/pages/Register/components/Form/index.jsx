import React, { useState } from "react"
import "./styles.css"
import Error from "../../../../components/Error"
import Input from "../../../../components/Input"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../../../components/Button"
import { useDispatch } from "react-redux"
import { errorBlink } from "../../../../core/utilities/errorBlink"
import { sendRequest } from "../../../../core/axios"
import { setUser } from "../../../../core/redux/userSlice/userSlice"

const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [error, setError] = useState({ msg: "", hidden: true })
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        img: null,
    })
    const HandleOnInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleLogin = async () => {
        console.log(values)
        if (
            !values.password ||
            !values.username ||
            !values.firstName ||
            !values.lastName ||
            !values.email
        ) {
            errorBlink(setError, "All fields are required")
            return
        }
        if (values.password != values.confirmPassword) {
            errorBlink(setError, "Passwords doesn match")
            return
        }
        if (values.password.length < 6) {
            errorBlink(setError, "Password must be at least 6 letters long")
            return
        }

        try {
            const res = await sendRequest({
                route: "/auth/register",
                method: "POST",
                body: values,
            })
            console.log(res)
            localStorage.setItem("token", `Bearer ${res.token}`)
            dispatch(setUser(res.user))
            navigate("/")
        } catch (e) {
            errorBlink(setError, "username exist")
        }
    }

    return (
        <form className='register-form flex column center'>
            <Error msg={error.msg} hidden={error.hidden} />

            <div className='form-pair flex'>
                <div className='register-item'>
                    <Input
                        text={"Username"}
                        name={"username"}
                        handleChange={HandleOnInputChange}
                        value={values.username}
                    />
                </div>
                <div className='register-item'>
                    <Input
                        text={"Email"}
                        name={"email"}
                        type={"email"}
                        handleChange={HandleOnInputChange}
                        value={values.email}
                    />
                </div>
            </div>
            <div className='form-pair flex'>
                <div className='register-item'>
                    <Input
                        text={"Password"}
                        name={"password"}
                        type={"password"}
                        handleChange={HandleOnInputChange}
                        value={values.password}
                    />
                </div>
                <div className='register-item'>
                    <Input
                        text={"Confrim Password"}
                        name={"confirmPassword"}
                        type={"password"}
                        handleChange={HandleOnInputChange}
                        value={values.confirmPassword}
                    />
                </div>
            </div>
            <div className='form-pair flex'>
                <div className='register-item'>
                    <Input
                        text={"First Name"}
                        name={"firstName"}
                        handleChange={HandleOnInputChange}
                        value={values.firstName}
                    />
                </div>
                <div className='register-item'>
                    <Input
                        text={"Last Name"}
                        name={"lastName"}
                        handleChange={HandleOnInputChange}
                        value={values.lastName}
                    />
                </div>
            </div>
            <input
                type='file'
                onChange={HandleOnInputChange}
                name='img'
                value={values.img}
            />
            <div className='register-item register-item-btn '>
                <Button
                    text='Create Account'
                    type='submit'
                    onClick={handleLogin}
                />
                <small className='semi-bold'>
                    Already have an account?
                    <Link className='link' to='/login'>
                        {" "}
                        Login Here
                    </Link>
                </small>
            </div>
        </form>
    )
}

export default Form
