

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
  birth_date: string,
  birth_department: string,
  father_name: string,
  mother_name: string
}

export default User;