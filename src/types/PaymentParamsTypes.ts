interface PaymentParamsTypes {
  cmd?: string;
  rN?: string; // client name who is paying
  rT: string; // client phone number  who is paying
  rE?: string; // client email who is paying
  rH?: string; // seller code,
  rMt: number; // amount to pay,
  rDvs: string; // The currency corresponding to the amount you have entered.
  rOnly? : any; // This is optional. If you want your API to display only certain operators,
  // you can specify these operators here. 1=MTN, 2=Orange, 3=Express Union, 10=Dohone-Account, 5=VISA/MASTERCARD, 17=YUP, 18=Yoomee, 20=Gimacpay (BANK-FASTER).
  rLocale?: string; // choice of language FR or EN
  source: string; // salesperson name
  endPage : string; // The URL of the page to which the customer will be redirected after the payment.
  notifyPage?: string; // Automatic notification address for your site in the event of successful payment (optional)
  cancelPage: string; // Automatic notification address for your site in the event of failed payment (optional)
  motif: string; // The reason for the payment (optional)
  rI?: string; // The invoice number (optional)
}

export default PaymentParamsTypes;