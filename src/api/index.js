import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://apitest.yeabrak.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});
