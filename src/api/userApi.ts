import { UserState } from "../features/users/UserSlice";
import axiosClient from "./axiosApi";

const userApi = {
  getAllUser() {
    const url = "users";
    return axiosClient.get(url);
  },
};

export default userApi;
