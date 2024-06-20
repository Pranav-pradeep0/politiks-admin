import { commonRequest } from "./commonRequest";

// Login

export const login = async (data) => {
  return commonRequest("POST", "admin/adminLogin", data);
};

// Interests

export const getAllInterests = async () => {
  return commonRequest("GET", "user/GetInterests");
};

export const createInterest = async (data) => {
  return commonRequest("POST", "admin/CreateInterest", data);
};

// Followers

export const getAllFollowerDetails = async () => {
  return commonRequest("GET", "admin/getUserDetails");
};

// Leaders

export const getAllLeadersList = async () => {
  return commonRequest("GET", "admin/getLeaderDetails");
};

export const getApprovedAdminList = async () => {
  return commonRequest("GET", "admin/getApprovedLeaders");
};

// User

export const updateUserDetails = async (status, id) => {
  const data = {
    status: status,
  };
  return commonRequest("PUT", `admin/updateUserDetails/${id}`, data);
};

// Settings

export const getSettingsDetails = async () => {
  return commonRequest("GET", "admin/getAdminSetting");
};

export const updateSettingsDetails = async (data) => {
  return commonRequest("PUT", "admin/updateAdminSetting", data);
};
