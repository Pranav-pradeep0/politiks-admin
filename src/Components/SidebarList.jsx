import {
  Box,
  Button,
  Collapse,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ArrowDown,
  ArrowRight,
  CaretDown,
  CaretRight,
  CaretUp,
  Circle,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarList = ({ buttonList }) => {
  const theme = useTheme();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentPage(currentPath);
  }, [location]);

  const extractBaseRoute = (path) => {
    const segments = path.split("/");
    return segments.length > 1 ? `/${segments[1]}` : `/${segments[0]}`;
  };

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        "& ::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {buttonList?.map((item, ind) => {
        const isCurrentPage =
          extractBaseRoute(currentPage) === extractBaseRoute(item.route);
        const isExpanded = expandedItems[ind] || false;

        return (
          <Box key={ind}>
            <Link
              style={{
                all: "unset",
                marginBlock: "5px",
                cursor: "pointer",
              }}
              to={item.route}
              onClick={(e) => {
                if (item.subOptions) {
                  e.preventDefault();
                  toggleExpand(ind);
                }
              }}
            >
              <Button
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textTransform: "none",
                  paddingInline: "20px",
                  gap: "15px",
                  color: isCurrentPage ? theme.palette.primary.main : "white",
                  borderRadius: "8px",
                  backgroundColor: isCurrentPage
                    ? theme.palette.action.hover
                    : "transparent",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: isCurrentPage ? 700 : 400,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
                <Box>
                  {item.subOptions &&
                    (isExpanded ? (
                      <IconButton>
                        <CaretUp color="white" size={18} />
                      </IconButton>
                    ) : (
                      <IconButton>
                        <CaretDown size={18} color="white" />
                      </IconButton>
                    ))}
                </Box>
              </Button>
            </Link>
            {item.subOptions && (
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <Box
                  sx={{
                    pl: 3,
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  {item.subOptions.map((subOption, subIndex) => {
                    const isSubCurrentPage = currentPage === subOption.route;
                    return (
                      <Link
                        key={subIndex}
                        style={{ all: "unset", marginBlock: "5px" }}
                        to={subOption.route}
                      >
                        <Button
                          fullWidth
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            textTransform: "none",
                            color: isSubCurrentPage
                              ? theme.palette.primary.main
                              : "white",
                            borderRadius: "8px",
                            pl: 2,
                            backgroundColor: isSubCurrentPage
                              ? theme.palette.action.hover
                              : "transparent",
                            "&:hover": {
                              backgroundColor: theme.palette.action.hover,
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              justifyContent: "center",
                            }}
                          >
                            <Circle />
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: 400,
                              }}
                            >
                              {subOption.text}
                            </Typography>
                          </Box>
                        </Button>
                      </Link>
                    );
                  })}
                </Box>
              </Collapse>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default SidebarList;
