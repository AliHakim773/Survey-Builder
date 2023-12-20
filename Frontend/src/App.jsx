import { Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import "./styles/index.css"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
