import axios from 'axios';


const baseUrl = process.env.REACT_APP_API_PAYMENT_URL;


export const createOrder =  (data) => {
    return axios.post(`${baseUrl}/order/create`, data);
};

export const generateSign = (data) => {
    return axios.post(`${baseUrl}/order/generateSign`, data);
}