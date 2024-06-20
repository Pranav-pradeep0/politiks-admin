import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputField from "../../Components/InputField";
import theme from "../../../theme";
import {
  getSettingsDetails,
  updateSettingsDetails,
} from "../../Service/allApi";
import { Slide, ToastContainer, toast } from "react-toastify";

const Settings = () => {
  const [settingDetails, setSettingsDetails] = useState({
    locationSetting: {
      apiKey: "",
    },
    paymentGatewaySetting: {
      secretKey: "",
      stripeKey: "",
    },
    forceUpdate: {
      appVersion: "",
    },
  });

  const [editMode, setEditMode] = useState({
    locationSetting: false,
    paymentGatewaySetting: false,
    forceUpdate: false,
  });

  const [validationError, setValidationError] = useState();

  const fetchSettingsDetails = async () => {
    const response = await getSettingsDetails();
    if (response.status === 200) {
      const { data } = response;
      setSettingsDetails({
        locationSetting: {
          apiKey: data.locationSetting.apiKey,
        },
        paymentGatewaySetting: {
          secretKey: data.paymentGatewaySetting.secretKey,
          stripeKey: data.paymentGatewaySetting.stripeKey,
        },
        forceUpdate: {
          appVersion: data.forceUpdate.appVersion,
        },
      });
    }
  };

  useEffect(() => {
    fetchSettingsDetails();
  }, []);

  const handleEdit = (section) => {
    setEditMode((prev) => ({ ...prev, [section]: true }));
  };

  const handleSave = async (section) => {
    let payload = {};
    switch (section) {
      case "locationSetting":
        payload = {
          locationSetting: {
            apiKey: settingDetails.locationSetting.apiKey,
          },
        };
        break;
      case "paymentGatewaySetting":
        payload = {
          paymentGatewaySetting: {
            secretKey: settingDetails.paymentGatewaySetting.secretKey,
            stripeKey: settingDetails.paymentGatewaySetting.stripeKey,
          },
        };
        break;
      case "forceUpdate":
        payload = {
          forceUpdate: {
            appVersion: settingDetails.forceUpdate.appVersion,
          },
        };
        break;
      default:
        break;
    }

    const response = await updateSettingsDetails(payload);
    console.log(response);
    if (response.status === 200) {
      setEditMode((prev) => ({ ...prev, [section]: false }));
      toast.success(`Changes Saved`, {
        autoClose: 1000,
        transition: Slide,
      });
    }
  };

  const handleInputChange = (section, field, value) => {
    setSettingsDetails((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "grid",
        gap: "40px",
      }}
    >
      <ToastContainer position="top-center" transition={"Slide"} />
      <Box
        sx={{
          display: "grid",
          gap: "20px",
        }}
      >
        <Typography variant="h5">Location Settings</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme.palette.common.grey,
            padding: "30px 20px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Typography variant="h6" sx={{ width: "100px" }}>
              API key
            </Typography>
            <InputField
              value={settingDetails.locationSetting.apiKey}
              styles={{ width: "300px", height: "30px" }}
              disabled={!editMode.locationSetting}
              onChange={(e) =>
                handleInputChange("locationSetting", "apiKey", e.target.value)
              }
              error={validationError}
              setError={setValidationError}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              sx={{ height: "30px" }}
              variant="contained"
              onClick={() => handleSave("locationSetting")}
              disabled={!editMode.locationSetting}
            >
              Save
            </Button>
            <Button
              sx={{ height: "30px" }}
              variant="outlined"
              onClick={() => handleEdit("locationSetting")}
              disabled={editMode.locationSetting}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: "20px",
        }}
      >
        <Typography variant="h5">Payment Gateway Settings</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme.palette.common.grey,
            padding: "30px 20px",
            borderRadius: "10px",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Typography variant="h6" sx={{ width: "100px" }}>
                Stripe Key
              </Typography>
              <InputField
                value={settingDetails.paymentGatewaySetting.stripeKey}
                styles={{ width: "300px", height: "30px" }}
                disabled={!editMode.paymentGatewaySetting}
                onChange={(e) =>
                  handleInputChange(
                    "paymentGatewaySetting",
                    "stripeKey",
                    e.target.value
                  )
                }
                error={validationError}
                setError={setValidationError}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Typography variant="h6" sx={{ width: "100px" }}>
                Secret Key
              </Typography>
              <InputField
                value={settingDetails.paymentGatewaySetting.secretKey}
                styles={{ width: "300px", height: "30px" }}
                disabled={!editMode.paymentGatewaySetting}
                onChange={(e) =>
                  handleInputChange(
                    "paymentGatewaySetting",
                    "secretKey",
                    e.target.value
                  )
                }
                error={validationError}
                setError={setValidationError}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              sx={{ height: "30px" }}
              variant="contained"
              onClick={() => handleSave("paymentGatewaySetting")}
              disabled={!editMode.paymentGatewaySetting}
            >
              Save
            </Button>
            <Button
              sx={{ height: "30px" }}
              variant="outlined"
              onClick={() => handleEdit("paymentGatewaySetting")}
              disabled={editMode.paymentGatewaySetting}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: "20px",
        }}
      >
        <Typography variant="h5">Force Update</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme.palette.common.grey,
            padding: "30px 20px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Typography variant="h6" sx={{ width: "100px" }}>
              App Version
            </Typography>
            <InputField
              value={settingDetails.forceUpdate.appVersion}
              styles={{ width: "300px", height: "30px" }}
              disabled={!editMode.forceUpdate}
              onChange={(e) =>
                handleInputChange("forceUpdate", "appVersion", e.target.value)
              }
              error={validationError}
              setError={setValidationError}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              sx={{ height: "30px" }}
              variant="contained"
              onClick={() => handleSave("forceUpdate")}
              disabled={!editMode.forceUpdate}
            >
              Save
            </Button>
            <Button
              sx={{ height: "30px" }}
              variant="outlined"
              onClick={() => handleEdit("forceUpdate")}
              disabled={editMode.forceUpdate}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
