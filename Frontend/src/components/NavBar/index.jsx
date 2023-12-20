import React from "react"
import logo from "../../assets/images/logo.png"
import "./styles.css"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/redux/userSlice/userSlice"
import { Link } from "react-router-dom"

const NavBar = () => {
    const userState = useSelector(extractUserSlice)

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
                    <Link className='nav-item' to={"/"}>
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
