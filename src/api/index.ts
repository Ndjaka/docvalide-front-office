import PaymentParamsTypes from '../types/PaymentParamsTypes';
import { get, post } from "./base";
import { LegalizationRequest } from "../types/LegalizationPayloadTypes";
import OrderPayloadTypes from "../types/OrderPayloadTypes";
import UserPayloadTypes from "../types/UserPayloadTypes";
import CriminalRecordPayloadTypes from "../types/CriminalRecordPayloadTypes";


const PAYMENT_URL = 'https://www.my-dohone.com/dohone/pay';

const environment =import.meta.env.MODE as string;
const production = import.meta.env.VITE_API_URL_PROD as string;
const development = import.meta.env.VITE_API_URL as string
const API_URL = environment === 'production' ? production : production;


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
        return post(`${API_URL}/user`, params);
    }

 };

const criminalRecordUrls = {
    addCriminalRecord: (params: CriminalRecordPayloadTypes) => {
        return post(`${API_URL}/criminalrecord`, params);
    }
}

 export { paymentUrl , legalizationUrls , orderUrls, userUrls , criminalRecordUrls};