import axios from "axios";

const API_KEY = "AIzaSyCyugiveslPrErcwVlfjbfq7GYX71vmca0";


export const signup = (email, password) => {
    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        { email, password, returnSecureToken: true },
    );
};

export const login = (email, password) => {
    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        { email, password, returnSecureToken: true },
    );
};