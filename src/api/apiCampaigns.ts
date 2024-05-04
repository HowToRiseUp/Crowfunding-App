import axiosClient from "./axiosApi";

const CampaignsApi = {
  getAll() {
    const url = "campaigns";
    return axiosClient.get(url);
  },
};
export default CampaignsApi;
