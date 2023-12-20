import React from "react"
import Button from "../Button/index"
import "./styles.css"
import { useNavigate } from "react-router-dom"

const SurveyItem = ({
    title = "title...",
    description = "Description...",
    id,
}) => {
    const navigate = useNavigate()
    return (
        <div className='survey-item flex row'>
            <div className='flex column h-100'>
                <h2>Title: {title}</h2>
                <p>Description: {description}</p>
            </div>
            <div className='view-btn'>
                <Button
                    text='View'
                    onClick={() => {
                        navigate(`/survey/${id}`)
                    }}
                />
            </div>
        </div>
    )
}

export default SurveyItem
