import React from "react"
import InputQuestion from "./InputQuestion"
import RadioQuestion from "./RadioQuestion"
import CheckBoxQuestion from "./CheckBoxQuestion"

const Questions = ({ question, answers, type, index, onChange, value }) => {
    if (type == "input") {
        return (
            <InputQuestion
                Question={question.content}
                index={index}
                onChange={onChange}
                value={value}
            />
        )
    }
    if (type == "radio") {
        return (
            <CheckBoxQuestion
                question={question.content}
                answers={answers}
                index={index}
                onChange={onChange}
            />
        )
    }
    if (type == "checkbox") {
        return (
            <RadioQuestion
                question={question.content}
                answers={answers}
                index={index}
                onChange={onChange}
            />
        )
    }
}

export default Questions
