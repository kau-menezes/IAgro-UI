import { createBrowserRouter } from "react-router";
import { AppRoutes } from "../constants/app-routes.ts";
import { AppLayout } from "../components/layout/app-layout/index.tsx";
import { Login } from "../pages/login/index.tsx";
import { Root } from "../pages/root/index.tsx";
import { App } from "../App.tsx";
import { AuthenticationGuard } from "../components/guards/authentication/index.tsx";
import { Dashboard } from "../pages/dashboard/index.tsx";

export const router = createBrowserRouter([{
    Component: App,
    children: [
        {
            // Redirect to root when path not found
            path: "*",
            Component: Root
        },
        {
            // Root is not implemented, so it just redirects to dashboard
            path: AppRoutes.ROOT,
            Component: Root
        },
        {
            // Login page is open, without guards
            path: AppRoutes.LOGIN,
            Component: Login,
        },
        {
            // Component without path => layout
            Component: AppLayout,
            children: [{
                // Guard for authenticated routes
                Component: AuthenticationGuard,
                children: [
                    {
                        path: AppRoutes.DASHBOARD,
                        Component: Dashboard
                    },
                ]
            }]
        },
    ]
}])