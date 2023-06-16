interface User{
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  phoneNumber: string;
  townOfResidence: string;
  roles?: string;
  occupation?: string;
  motif: string;
  receiptMoment: string;
}

export default User;