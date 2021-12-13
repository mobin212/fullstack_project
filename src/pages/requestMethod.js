import axios from "axios";

const BASE_URL= "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTdhZjYyY2RjOGMzOGYxOTRmY2E2ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzkxNTc1MDMsImV4cCI6MTYzOTQxNjcwM30.68NgSctVv-N8Z6Yd2Kkuen4t-eQV1-yo7v-qaIS_oCc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header : {token:`Bearer ${TOKEN}`}
})