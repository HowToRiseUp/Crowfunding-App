import DashboardTopbar from "../models/dashboard/DashboardTopbar";

interface LayoutDashboardProps {
    children: React.ReactNode
}

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
    return (
        <div className="p-10">
            <DashboardTopbar></DashboardTopbar>
            {children}
        </div>
    );
};

export default LayoutDashboard;