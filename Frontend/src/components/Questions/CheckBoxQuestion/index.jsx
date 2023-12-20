import React, { useEffect } from "react"
import "./styles.css"

const CheckBoxQuestion = ({ question, answers }) => {
    return (
        <div className='checkbox-question'>
            <h4>{question}</h4>
            {answers?.map((answer) => {
                return (
                    <div key={answer._id}>
                        <input
                            type='checkbox'
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

export default CheckBoxQuestion
