import { commonRequest } from "./commonRequest";

// Interests

export const getAllInterests = async () => {
  return commonRequest("GET", "user/GetInterests");
};

export const createInterest = async (data) => {
  return commonRequest("POST", "admin/CreateInterest", data);
};

// Users

export const getAllUserDetails = async () => {
  return commonRequest("GET", "admin/getUserDetails");
};
