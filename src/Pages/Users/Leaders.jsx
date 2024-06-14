import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Tab, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Leaderlist from "./Leader Tabs/Leaderlist";
import VerificationRequests from "./Leader Tabs/VerificationRequests";
import theme from "../../../theme";

const tabs = [
  {
    label: "Leader List",
    component: <Leaderlist />,
  },
  {
    label: "Verification Requests",
    component: <VerificationRequests />,
  },
];

const Leaders = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", padding: "30px" }}>
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ backgroundColor: "white" }}
            TabIndicatorProps={{
              sx: {
                backgroundColor: "white",
                height: "100%",
              },
            }}
          >
            {tabs.map((tab, ind) => (
              <Tab
                key={ind}
                label={tab.label}
                value={(ind + 1).toString()}
                sx={{
                  backgroundColor:
                    value === (ind + 1).toString()
                      ? "white"
                      : theme.palette.secondary.main,
                  marginRight: "4px",
                  color: "black !important",
                  fontWeight: value === (ind + 1).toString() && 700,
                  zIndex: value === (ind + 1).toString() && 1,
                  borderRadius: "4px",
                }}
                disableRipple
              />
            ))}
          </TabList>
          <Box>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                gap: "5px",
                marginLeft: "auto",
              }}
              onClick={() => navigate("/users/leaders/add")}
            >
              <Plus size={18} color="white" />
              Add New
            </Button>
          </Box>
        </Box>
        {tabs.map((tab, ind) => (
          <TabPanel key={ind} value={(ind + 1).toString()}>
            {tab.component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default Leaders;
