import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "../components/layouts/RootLayout";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/auth/Login";


export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "dashboard",
                element: <DashboardLayout />,
            }
        ]
    },
    {
        path: "/login",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]
    }
])