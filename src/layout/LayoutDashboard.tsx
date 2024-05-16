import DashboardSidebar from "../models/dashboard/DashboardSidebar";
import DashboardTopbar from "../models/dashboard/DashboardTopbar";

interface LayoutDashboardProps {
    children: React.ReactNode
}

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
    return (
        <div className="p-10">
            <DashboardTopbar></DashboardTopbar>
            <div className="flex gap-10 items-start justify-start">
                <DashboardSidebar></DashboardSidebar>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutDashboard;