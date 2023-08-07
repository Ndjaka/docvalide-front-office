import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";
import {lazy} from "react";

let HomePage = Loadable(lazy(() => import('../pages/main-page/Home')));
let PaymentStatusPage = Loadable(lazy(() => import('../pages/payment-status/PaymentStatus')));

const MainRoutes = {

    path:'/',
    element: <MainLayout/>,
    children : [
        {
            path:'/',
            element: <HomePage/>
        },
        {
            path:'/payment-status',
            element: <PaymentStatusPage/>
        }
    ]
}

export default MainRoutes;