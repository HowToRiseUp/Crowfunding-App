import Header from "../components/common/Header";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignGrid from "../models/campaign/CampaignGrid";

const DashboardPage = () => {
    return (
        <LayoutDashboard>
            <Header>Popular Campaign</Header>
            <CampaignGrid></CampaignGrid>
        </LayoutDashboard>
    );
};

export default DashboardPage;