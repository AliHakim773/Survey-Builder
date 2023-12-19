import React from "react"
import "./styles.css"

const Button = ({ type = "button", onClick, text = "Button" }) => {
    return (
        <button
            className='rounded w-100 btn btn-orange'
            type={type}
            onClick={(e) => {
                e.preventDefault()
                onClick(e)
            }}>
            {text}
        </button>
    )
}

export default Button
