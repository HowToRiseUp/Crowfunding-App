import { useDispatch } from "react-redux";
import Header from "../components/common/Header";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignGrid from "../models/campaign/CampaignGrid";
import { useEffect } from "react";
import { userAction } from "../features/users/UserSlice";
import CampaignItem from "../models/campaign/CampaignItem";

const DashboardPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userAction.fetchUserList())
    }, [dispatch])
    return (
        <>
            <Header>Popular Campaign</Header>
            <CampaignGrid>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
            </CampaignGrid>
        </>
    );
};

export default DashboardPage;