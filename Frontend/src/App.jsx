import { Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import "./styles/index.css"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SurveyList from "./pages/SurveyList"
import Survey from "./pages/Survey"

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<SurveyList />} />
                    <Route path='/survey/:id' element={<Survey />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
