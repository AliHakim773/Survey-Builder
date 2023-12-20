import React from "react"
import "./styles.css"
import Form from "./components/Form"

const Register = () => {
    return (
        <div className='page-section'>
            <section className='section-body flex column center'>
                <h1 className='semi-bold'>Create Your Account</h1>
                <Form />
            </section>
        </div>
    )
}

export default Register
