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
  add(data: Campaign): Promise<ListResponse<Campaign>> {
    const url = "campaigns";
    return axiosClient.post(url, {
      data,
    });
  },
  update(data: Campaign): Promise<ListResponse<Campaign>> {
    const url = "campaigns";
    return axiosClient.patch(url, {
      data,
    });
  },
  remove(id: string): Promise<any> {
    const url = `campaigns/${id}`;
    return axiosClient.delete(url);
  },
};
export default CampaignsApi;
