import PaymentParamsTypes from '../../types/PaymentParamsTypes';
import { orderUrls, paymentUrl } from "../index";
import OrderPayloadTypes from "../../types/OrderPayloadTypes";

class PaymentService {
  static buy(params: PaymentParamsTypes) {
    return  paymentUrl.buy(params);
  }

  static async order(params: OrderPayloadTypes) {
    return  orderUrls.addOrder(params);
  }
}

export default PaymentService;