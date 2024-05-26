
import React from "react";
import DashboardTopbar from "../models/dashboard/DashboardTopbar";
import DashboardSidebar from "../models/dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
    return (
        <div className="min-h-screen p-10 bg-lite">
            <DashboardTopbar></DashboardTopbar>
            <div className="flex items-start gap-x-10">
                <DashboardSidebar></DashboardSidebar>
                <div className="flex-1">
                    <Outlet></Outlet>

                </div>
            </div>
        </div>
    );
};

export default LayoutDashboard;