// @flow
import * as React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



const useTestPayments = () => {
    const  [isTest, setIsTest] = React.useState<boolean>(false);

    useEffect(() => {
        if (document.location.href.includes("localhost") || document.location.href.includes("test")){
            setIsTest(true);
        }
    }, [document.location.href]);

    return isTest;
};

export default useTestPayments;