import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";
import {lazy} from "react";

let HomePage = Loadable(lazy(() => import('../pages/main-page/Home')));

const MainRoutes = {

    path:'/',
    element: <MainLayout/>,
    children : [
        {
            path:'/',
            element: <HomePage/>
        }
    ]
}

export default MainRoutes;