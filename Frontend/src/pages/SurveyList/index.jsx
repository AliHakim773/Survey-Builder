import React, { useDebugValue, useEffect, useState } from "react"
import "./styles.css"
import { sendRequest } from "../../core/axios"
import SurveyItem from "../../components/SurveyItem"

const SurveyList = () => {
    const [surveys, setSurveys] = useState([])
    useEffect(() => {
        const getSurveys = async () => {
            const res = await sendRequest({ route: "/survey" })
            setSurveys(res.surveys)
            console.log(res.surveys)
        }
        getSurveys()
    }, [])
    return (
        <div className='page-section'>
            <section className='section-body flex column'>
                <div className='survey-nav flex row'>
                    <div className='survey-nav-item flex center'>All</div>
                    <div className='survey-nav-item flex center'>Completed</div>
                    <div className='survey-nav-item flex center'>Create</div>
                </div>
                <div className='survey-list flex column'>
                    {surveys?.map((survey) => (
                        <SurveyItem
                            key={survey._id}
                            title={survey.title}
                            description={survey.description}
                            id={survey._id}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default SurveyList
