import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

export const sendRequest = async ({ route, method = "GET", body }) => {
    const token = localStorage.getItem("token")

    const authorizationHeader = token
    console.log(body)
    const response = await axios.request({
        url: route,
        method,
        data: body,
        headers: {
            Authorization: authorizationHeader,
            "Content-Type": "application/json",
        },
    })

    return response.data
}
