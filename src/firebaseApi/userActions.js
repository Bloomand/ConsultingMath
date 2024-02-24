import axios from "axios";

const DB_URL = "https://consultingmath-1ebf6-default-rtdb.europe-west1.firebasedatabase.app";

export const getUserInfo = userId => {
  return axios.get(`${DB_URL}/users/${userId}.json`);
};

export const setUserPoints = (userId, info) => {
  return axios.patch(`${DB_URL}/users.json`, {
    [userId]: {
      id: userId,
      ...info,
    },
  });
};

export const getUsers = () => {
  return axios.get(`${DB_URL}/users.json`);
};