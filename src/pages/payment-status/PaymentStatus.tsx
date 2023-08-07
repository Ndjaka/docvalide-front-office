// @flow 
import * as React from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Status, { statusType } from "./Status";

interface PaymentStatusProps {
}

const PaymentStatus = (props: PaymentStatusProps) => {


  const {status} = useParams();

  return (
    <Container>
     <Status status={status as statusType}/>
    </Container>
  );
};

export default PaymentStatus;