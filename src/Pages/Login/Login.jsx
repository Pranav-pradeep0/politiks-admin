import React from "react";
import Banner from "../../assets/LoginBanner.svg";
import { Box, Button, InputBase } from "@mui/material";
import Logo from "../../assets/SidebarLogo.svg";
import theme from "../../../theme";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.black,
        width: "100vw",
        display: "flex",
        "& ::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#131313",
            width: "max-content",
            color: "white",
            padding: "80px 60px",
            borderRadius: "30px",
            display: "grid",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              marginInline: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <img
              src={Logo}
              style={{
                width: "130px",
              }}
            />
            <span
              style={{ fontSize: "17px", fontWeight: 200, textAlign: "center" }}
            >
              Admin Login
            </span>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: "20px",
              width: "300px",
            }}
          >
            <InputBase
              type="email"
              sx={{
                color: "white",
                borderRadius: "30px",
                backgroundColor: "#292929",
                padding: "8px 15px",
                "& ::placeholder": {
                  textAlign: "center",
                },
              }}
              placeholder="Enter your Email"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <InputBase
                type="password"
                sx={{
                  color: "white",
                  borderRadius: "30px",
                  backgroundColor: "#292929",
                  padding: "8px 15px",
                  "& ::placeholder": {
                    textAlign: "center",
                  },
                }}
                placeholder="Enter your Password"
              />
              <Link
                style={{
                  color: theme.palette.error.main,
                  textDecoration: "none",
                  marginLeft: "auto",
                  fontSize: "14px",
                  marginRight: "5px",
                }}
              >
                Forgot password?
              </Link>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              textTransform: "uppercase",
              borderRadius: "25px",
              paddingBlock: "10px",
            }}
          >
            Login
          </Button>
        </Box>
      </Box>

      <img
        src={Banner}
        style={{ margin: 0, padding: 0, height: "100vh", marginLeft: "auto" }}
      />
    </Box>
  );
};

export default Login;
