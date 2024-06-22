import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Pages/Login/Login";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import Sidebar from "./Pages/Sidebar";
import theme from "../theme";
import Header from "./Components/Header";
import Followerlist from "./Pages/Users/Followers/FollowerList";
import Interests from "./Pages/Users/Interests/Interests";
import Leaders from "./Pages/Users/Leader/Leaders";
import { List } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Settings from "./Pages/Settings/Settings";
import Admin from "./Pages/Admin/Admin";
import AddNewAdmin from "./Pages/Admin/AddNewAdmin";

function App() {
  const matches = useMediaQuery("(min-width:800px)");

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isLoggedin = localStorage.getItem("politiksAdminLogin");

  useEffect(() => {
    if (!isLoggedin) {
      navigate("/login");
    }
  }, [isLoggedin]);

  const subadminroutes = [
    { Users: "read and write" },
    { "CMS Page": "read only" },
    { Notifications: "read only" },
  ];

  const role = "admin";

  if (isLoggedin) {
    return (
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.common.black,
            color: "white",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            overflowY: "auto",
            width: "100%",
            maxWidth: "17%",
            display: !matches && "none",
          }}
        >
          <Sidebar role={role} permissions={subadminroutes} />
        </Box>

        <Drawer
          sx={{
            display: matches && "none",
          }}
          open={open}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{
              width: "220px",
              backgroundColor: theme.palette.common.black,
              height: "100vh",
              color: "white",
              paddingBlock: "30px",
            }}
          >
            <Sidebar role={role} permissions={subadminroutes} />
          </Box>
        </Drawer>

        <Box
          sx={{
            marginLeft: matches && "17%",
            flexGrow: 1,
            height: "100%",
            width: "83%",
            backgroundColor: "white",
          }}
        >
          <Header onMenuButtonClick={toggleDrawer(true)} />
          <Routes>
            {/* Users */}
            <Route path="users/leaders" element={<Leaders />} />
            <Route path="users/followers" element={<Followerlist />} />
            <Route path="users/interests" element={<Interests />} />

            {/* Settings */}
            <Route path="/settings" element={<Settings />} />

            {/* Admin */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/addnew" element={<AddNewAdmin />} />
          </Routes>
        </Box>
      </Box>
    );
  } else {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
}

export default App;
