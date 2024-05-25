import { useDispatch } from "react-redux";
import Header from "../components/common/Header";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignGrid from "../models/campaign/CampaignGrid";
import { useEffect } from "react";
import { userAction } from "../features/users/UserSlice";

const DashboardPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userAction.fetchUserList())
    }, [dispatch])
    return (
        <LayoutDashboard>
            <Header>Popular Campaign</Header>
            <CampaignGrid></CampaignGrid>
        </LayoutDashboard>
    );
};

export default DashboardPage;