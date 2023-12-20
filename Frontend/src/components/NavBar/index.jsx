import React, { useEffect } from "react"
import logo from "../../assets/images/logo.png"
import "./styles.css"
import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "../../core/redux/userSlice/userSlice"
import { Link, useNavigate } from "react-router-dom"
import { sendRequest } from "../../core/axios"

const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userState = useSelector(extractUserSlice)

    useEffect(() => {
        const refresh = async () => {
            try {
                const res = await sendRequest({ route: "/auth/" })
                localStorage.setItem("token", `Bearer ${res.token}`)
                dispatch(setUser(res.user))
            } catch (e) {
                console.log(e)
            }
        }
        refresh()
    }, [])

    return (
        <nav className='w-100 orange-bg nav-bar flex row'>
            <Link to={"/"} className='logo'>
                <img src={logo} alt='SE Survey' />
            </Link>
            <div className='user-nav flex'>
                {userState.username === "" ? (
                    <>
                        <Link className='nav-item' to={"/login"}>
                            Login
                        </Link>
                        <Link className='nav-item' to={"/register"}>
                            Register
                        </Link>
                    </>
                ) : (
                    <Link
                        className='nav-item'
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/")
                        }}
                        to={"/"}>
                        Logout
                    </Link>
                )}

                <div className='pfp circle'>
                    <img src={userState.img_url} alt={userState.username} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
