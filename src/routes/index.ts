import { createBrowserRouter } from "react-router";
import { AppRoutes } from "../constants/app-routes";
import { AppShell } from "../components/layout/app-shell/index.tsx";
import { Login } from "../pages/login/index.tsx";
import { Home } from "../pages/home/index.tsx";

export const router = createBrowserRouter([{
    children: [
        {
            path: AppRoutes.LOGIN,
            Component: Login,
        },
        {
            Component: AppShell,
            children: [{
                children: [
                    {
                        path: AppRoutes.ROOT,
                        Component: Home
                    }
                    
                ]
            }]
        },
    ]
}])