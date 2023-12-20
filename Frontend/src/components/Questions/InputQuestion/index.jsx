import React from "react"
import "./styles.css"
import Input from "../../Input"

const InputQuestion = ({ Question, index, onChange, value }) => {
    return (
        <div>
            <h4>{Question}</h4>
            <Input
                text={"Answer"}
                value={value[index]}
                handleChange={(e) => {
                    onChange(index, e.target.value)
                }}
            />
        </div>
    )
}

export default InputQuestion
