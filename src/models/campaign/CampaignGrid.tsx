import CampaignItem from "./CampaignItem";

const CampaignGrid = () => {
    return (
        <div className="grid-cols-4 grid gap-7">
            <CampaignItem></CampaignItem>
            <CampaignItem></CampaignItem>
            <CampaignItem></CampaignItem>
            <CampaignItem></CampaignItem>
        </div>
    );
};

export default CampaignGrid;