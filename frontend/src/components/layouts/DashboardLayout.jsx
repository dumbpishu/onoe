import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">Onoe Dashboard</h1>
            </header>
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 Onoe. All rights reserved.</p>
            </footer>
        </div>
    );
}