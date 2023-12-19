import React from "react"
import "./styles.css"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/redux/userSlice/userSlice"

const NavBar = () => {
    const userState = useSelector(extractUserSlice)

    return <nav>{userState.username}</nav>
}

export default NavBar
