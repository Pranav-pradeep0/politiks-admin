import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "./Pages/Sidebar";
import theme from "../theme";
import Header from "./Components/Header";
import Leaders from "./Pages/Users/Leaders";
import Followerlist from "./Pages/Users/Followers/FollowerList";
import Interests from "./Pages/Users/Interests/Interests";

function App() {
  const matches = useMediaQuery("(min-width:800px)");

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
        <Sidebar />
      </Box>
      <Box
        sx={{
          marginLeft: "17%",
          flexGrow: 1,
          height: "100%",
          width: "83%",
          backgroundColor: "white",
        }}
      >
        <Header />
        <Routes>
          {/* Users */}
          <Route path="users/leaders" element={<Leaders />} />
          <Route path="users/followers" element={<Followerlist />} />
          <Route path="users/interests" element={<Interests />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
