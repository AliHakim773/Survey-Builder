import "./styles.css"

import Form from "./components/Form"

const Login = () => {
    return (
        <div className='page-section'>
            <section className='section-body flex column center'>
                <h1 className='semi-bold'>Login Here</h1>
                <Form />
            </section>
        </div>
    )
}

export default Login
