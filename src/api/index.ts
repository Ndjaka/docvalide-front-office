import PaymentParamsTypes from '../types/PaymentParamsTypes';
import { get, post } from "./base";
import { LegalizationRequest } from "../types/LegalizationPayloadTypes";
import OrderPayloadTypes from "../types/OrderPayloadTypes";
import UserPayloadTypes from "../types/UserPayloadTypes";

const PAYMENT_URL = 'https://www.my-dohone.com/dohone/pay';
const API_URL = import.meta.env.VITE_API_URL as string;



 const paymentUrl = {
  buy: (params: PaymentParamsTypes) => {

    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    return get(`${PAYMENT_URL}?${queryString}`);
  },
};

 const legalizationUrls = {
    addLegalization: (params: LegalizationRequest) => {
        return post(`${API_URL}/legalization`, params);
    }
 }

 const orderUrls = {
    addOrder: (params: OrderPayloadTypes) => {
        return post(`${API_URL}/order?userId=${params.userId}`, params);
    }
  };

const userUrls = {
    addUser: (params: UserPayloadTypes) => {
        return post(`${API_URL}/user?`, params);
    }

 };

 export { paymentUrl , legalizationUrls , orderUrls, userUrls};