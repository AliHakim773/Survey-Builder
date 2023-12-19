import React, { useEffect, useState } from "react"
import "./styles.css"

const Input = ({ value, handleChange, type = "text", text, name }) => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (value === "") {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [value])

    return (
        <>
            <div className='form-input-wrapper'>
                <label
                    htmlFor={name}
                    className={
                        visible ? "form-label" : "form-label visible-value"
                    }>
                    {text}
                </label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    className='form-input'
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default Input
