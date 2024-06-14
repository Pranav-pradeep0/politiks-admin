import React from "react";
import { Box, Button, Chip, IconButton, Switch } from "@mui/material";
import DataTable from "../../../Components/DataTable";
import { Eye, Pencil, Trash } from "@phosphor-icons/react";
import theme from "../../../../theme";

const Leaderlist = () => {
  const columns = [
    { field: "userid", headerName: "User ID" },
    { field: "username", headerName: "Username" },
    { field: "email", headerName: "Email" },
    { field: "state", headerName: "State" },
    { field: "gender", headerName: "Gender" },
    {
      field: "status",
      headerName: "Status",
      renderCell: (value, row) => (
        <Switch
          checked={row.status === "Active"}
          color="primary"
          inputProps={{ "aria-label": "controlled" }}
        />
      ),
    },
    {
      field: "verification",
      headerName: "Verification",
      renderCell: (value, row) => {
        let chipColor;
        switch (row.verification) {
          case "Verified":
            chipColor = "success";
            break;
          case "Rejected":
            chipColor = "error";
            break;
          case "Pending":
            chipColor = "warning";
            break;
          default:
            chipColor = "default";
        }
        return (
          <Chip label={row.verification} color={chipColor} variant="outlined" />
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (value, row) => (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <IconButton>
            <Eye color="black" />
          </IconButton>
          <IconButton>
            <Pencil color={theme.palette.info.main} />
          </IconButton>
          <IconButton>
            <Trash color={theme.palette.error.main} />
          </IconButton>
        </Box>
      ),
    },
  ];

  const rows = [
    {
      userid: 1,
      username: "john_doe",
      email: "john@example.com",
      state: "California",
      gender: "Male",
      status: "Active",
      verification: "Verified",
    },
    {
      userid: 2,
      username: "jane_doe",
      email: "jane@example.com",
      state: "New York",
      gender: "Female",
      status: "Inactive",
      verification: "Pending",
    },
  ];

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
  };

  return <DataTable columns={columns} rows={rows} />;
};

export default Leaderlist;
