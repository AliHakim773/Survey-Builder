import React, { useEffect, useState } from "react"
import "./styles.css"
import { useParams } from "react-router-dom"
import { sendRequest } from "../../core/axios"
import Questions from "../../components/Questions"

const Survey = () => {
    const { id } = useParams()
    const [survey, setSurvey] = useState({})
    const [answers, setAnswers] = useState([])

    const handleOnChange = (i, answer) => {
        setAnswers((prev) => {
            return (prev[i] = answer)
        })
    }

    useEffect(() => {
        const getSurvey = async () => {
            const res = await sendRequest({ route: `/survey/${id}` })
            console.log(res.survey[0])
            setSurvey(res.survey[0])
        }
        getSurvey()
    }, [])
    return (
        <div className='page-section'>
            <section className='section-body flex column survey'>
                <h2>{survey.title}</h2>
                <p>{survey.description}</p>
                <hr />
                {survey.questions?.map((question, i) => {
                    return (
                        <Questions
                            key={question._id}
                            type={question.type.type}
                            question={question}
                            answers={question.answers}
                            index={i}
                            onChange={handleOnChange}
                            value={answers}
                        />
                    )
                })}
            </section>
        </div>
    )
}

export default Survey
