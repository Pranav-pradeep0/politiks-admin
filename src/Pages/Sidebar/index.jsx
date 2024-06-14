import { Box } from "@mui/material";
import React from "react";
import Logo from "../../assets/SidebarLogo.svg";
import SidebarList from "../../Components/SidebarList";
import {
  Basket,
  DiamondsFour,
  Dress,
  FileText,
  Gear,
  ListHeart,
  Notification,
  ShoppingCart,
  SquaresFour,
  TextIndent,
  Users,
} from "@phosphor-icons/react";
import theme from "../../../theme";

const sidebarButtons = [
  {
    icon: <SquaresFour size={22} />,
    text: "Dashboard",
    route: "/",
  },
  {
    icon: <Users size={22} />,
    text: "Users",
    route: "/users",
    subOptions: [
      {
        text: "Leaders",
        route: "/users/leaders",
      },
      {
        text: "Followers",
        route: "/users/followers",
      },
      {
        text: "Interests",
        route: "/users/interests",
      },
    ],
  },
  {
    icon: <FileText size={22} />,
    text: "CMS Page",
    route: "/cms",
  },
  {
    icon: <Notification size={22} />,
    text: "Notifications",
    route: "/notifications",
  },
  {
    icon: <Gear size={22} />,
    text: "Settings",
    route: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBlock: "auto",
        gap: "50px",
      }}
    >
      <Box
        sx={{
          marginInline: "auto",
          marginTop: "50px",
          display: "grid",
          gap: "10px",
        }}
      >
        <img src={Logo} />
        <span
          style={{ fontSize: "13px", fontWeight: 200, textAlign: "center" }}
        >
          Admin Panel
        </span>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <SidebarList buttonList={sidebarButtons} />
      </Box>
    </Box>
  );
};

export default Sidebar;
