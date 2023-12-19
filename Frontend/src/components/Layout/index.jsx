import React from "react"
import NavBar from "../NavBar"

const Layout = ({ children }) => {
    return (
        <div className='page'>
            <NavBar />
            <main>{children}</main>
        </div>
    )
}

export default Layout
