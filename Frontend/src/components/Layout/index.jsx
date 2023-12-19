import React from "react"
import NavBar from "../NavBar"

const Layout = ({ children }) => {
    return (
        <div className='page orange-light-bg'>
            <NavBar />
            <main>{children}</main>
        </div>
    )
}

export default Layout
