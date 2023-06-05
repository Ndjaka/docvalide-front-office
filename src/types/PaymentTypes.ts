import { DocumentTypes } from "./DocumentTypes";

interface PaymentTypes extends DocumentTypes {
    quantity?: number,
}

export default PaymentTypes;