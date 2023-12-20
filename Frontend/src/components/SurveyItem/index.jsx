import React from "react"
import Button from "../Button/index"
import "./styles.css"

const SurveyItem = ({ title = "title...", description = "Description..." }) => {
    return (
        <div className='survey-item flex row'>
            <div className='flex column h-100'>
                <h2>Title: {title}</h2>
                <p>Description: {description}</p>
            </div>
            <div className='view-btn'>
                <Button text='View' />
            </div>
        </div>
    )
}

export default SurveyItem
