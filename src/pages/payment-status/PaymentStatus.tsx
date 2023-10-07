// @flow 
import * as React from "react";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Status, { statusType } from "./Status";

interface PaymentStatusProps {
}

const PaymentStatus = (props: PaymentStatusProps) => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get("status");
  // const rI = searchParams.get("rI");


  return (
    <Container>
     <Status status={status as statusType}/>
    </Container>
  );
};

export default PaymentStatus;