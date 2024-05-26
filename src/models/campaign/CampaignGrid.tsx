import CampaignItem from "./CampaignItem";

const CampaignGrid = ({ children, type = "default" }: { children: React.ReactNode, type?: string }) => {

    if (type !== "default")
        return <div className="grid grid-cols-1 gap-y-10">{children}</div>;
    return <div className="grid grid-cols-4 gap-x-7">{children}</div>;

};

export default CampaignGrid;