import axios from 'axios';

const axiosInstance = axios.create();

export function getRequestOne(id) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`https://api.github.com/users/${id}/repos?sort=updated`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getRequestTwo(param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`test set timeout, param ${param}`);
    }, 2000);
  });
}
