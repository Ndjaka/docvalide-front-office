import PaymentParamsTypes from '../types/PaymentParamsTypes';
import { get } from './base';
import { post } from "./base";

// const PAYMENT_URL = import.meta.env.VITE_PAYMENT_API_URL as string;
const PAYMENT_URL = 'https://www.my-dohone.com/dohone/pay';
const VITE_MARCHAND_CODE = import.meta.env.VITE_MARCHAND_CODE as string;


export const paymentUrl = {
  buy: (params: PaymentParamsTypes) => {

    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    return get(`${PAYMENT_URL}?${queryString}`);
  },
};

// export const paymentUrl = {
//   buy: (params: PaymentParamsTypes) => {
//     return post(`${PAYMENT_URL}`, params);
//   },
// };
