import { Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import "./styles/index.css"
import Login from "./pages/Login"

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}

export default App
