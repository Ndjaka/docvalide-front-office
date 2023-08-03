import PaymentParamsTypes from '../../types/PaymentParamsTypes';
import { paymentUrl } from '../index';

class PaymentService {
  static async buy(params: PaymentParamsTypes) {
    return await paymentUrl.buy(params);
  }
}

export default PaymentService;