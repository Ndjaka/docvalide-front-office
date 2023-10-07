import OrderEnum from "../enums/OrderEnum";
import OrderTypeEnum from "../enums/OrderTypeEnum";

interface OrderPayloadTypes {
  orderType :   OrderTypeEnum ;
  orderStatus: OrderEnum;
  orderAmount: number;
  orderNumber: string;
  userId: string;
}

export default OrderPayloadTypes;