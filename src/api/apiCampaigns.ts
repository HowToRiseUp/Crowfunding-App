import { Campaign } from "../models/campaigns";
import { ListResponse } from "../models/common";
import axiosClient from "./axiosApi";

const CampaignsApi = {
  getAll(): Promise<ListResponse<Campaign>> {
    const url = "campaigns";
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};
export default CampaignsApi;
