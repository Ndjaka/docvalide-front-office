import PaymentParamsTypes from "../../types/PaymentParamsTypes";
import { paymentUrl } from "../index";

class PaymentService {

     static async buy(params:PaymentParamsTypes) {
       const response = await paymentUrl.buy(params);
        return response.data;
     }


}

export default PaymentService;