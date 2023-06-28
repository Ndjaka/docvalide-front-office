import PaymentParamsTypes from '../types/PaymentParamsTypes';
import { get } from './base';

// const PAYMENT_URL = import.meta.env.VITE_PAYMENT_API_URL as string;
const PAYMENT_URL = 'https://www.my-dohone.com/dohone/pay';
const VITE_MARCHAND_CODE = import.meta.env.VITE_MARCHAND_CODE as string;

export const paymentUrl = {
  buy: (params: PaymentParamsTypes) => {
    return get(`${PAYMENT_URL}?cmd=${'start'}
                                 &rN=${params.rN}
                                 &rDvs=${params.rDvs}
                                 &rMt=${params.rMt}
                                 &rT=${params.rT}
                                 &rH=${VITE_MARCHAND_CODE}
                                 &source=${params.source}
                                 &endPage=${params.endPage}
                                 &cancelPage=${params.cancelPage}
                                 &motif=${params.motif}
                                 &rLocale=FR
                               `);
  },
};
