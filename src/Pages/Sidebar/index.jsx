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
  UserGear,
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
    icon: <UserGear size={22} />,
    text: "Admin",
    route: "/admin",
  },
  {
    icon: <Gear size={22} />,
    text: "Settings",
    route: "/settings",
  },
];

const Sidebar = ({ role, permissions }) => {
  const permissionMapping = {
    Users: "/users",
    "CMS Page": "/cms",
    Dashboard: "/",
    Notifications: "/notifications",
    Admin: "/admin",
    Settings: "/settings",
  };

  const filterSidebarItems = (role, permissions) => {
    if (role === "admin") {
      return sidebarButtons;
    }

    const allowedTexts = permissions.map((p) => Object.keys(p)[0]);

    return sidebarButtons.filter((button) =>
      allowedTexts.includes(button.text)
    );
  };

  const filteredButtons = filterSidebarItems(role, permissions);

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
        <SidebarList buttonList={filteredButtons} />
      </Box>
    </Box>
  );
};

export default Sidebar;
