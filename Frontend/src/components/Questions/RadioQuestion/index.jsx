import React from "react"
import "./styles.css"

const RadioQuestion = ({ question, answers }) => {
    return (
        <div className='radio-question'>
            <h4>{question}</h4>
            {answers.map((answer) => {
                return (
                    <div key={answer._id}>
                        <input
                            type='radio'
                            id={answer._id}
                            name={answer.content}
                            value={answer.content}
                        />
                        <label htmlFor={answer._id}>{answer.content}</label>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default RadioQuestion
