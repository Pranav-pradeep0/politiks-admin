import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Tab, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import UserRoles from "./Admin Tabs/UserRoles";
import UserList from "./Admin Tabs/UserList";
import theme from "../../../theme";

const Admin = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "User List",
      component: <UserList />,
    },
    {
      label: "User Roles",
      component: <UserRoles />,
    },
  ];

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
              onClick={() => navigate("/admin/addnew")}
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

export default Admin;
