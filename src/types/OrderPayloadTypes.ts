import OrderEnum from "../enums/OrderEnum";

interface OrderPayloadTypes {
  orderType?: 'CriminalRecord' | 'Legalization' ;
  orderStatus: OrderEnum;
  orderAmount: number;
  orderNumber: string;
  userId: string;
}

export default OrderPayloadTypes;