import React from "react";
import { Box, Chip, IconButton, Switch } from "@mui/material";
import { Eye, Pencil, Trash } from "@phosphor-icons/react";
import theme from "../../../../theme";
import DataTable from "../../../Components/DataTable";
import TopAddNewBar from "../../../Components/TopAddNewBar";

const Followerlist = () => {
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
          <IconButton onClick={() => handleEdit(row.userid)}>
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
      username: "alice_wonder",
      email: "alice@example.com",
      state: "Florida",
      gender: "Female",
      status: "Active",
      verification: "Verified",
    },
    {
      userid: 2,
      username: "bob_builder",
      email: "bob@example.com",
      state: "Texas",
      gender: "Male",
      status: "Inactive",
      verification: "Pending",
    },
    {
      userid: 3,
      username: "charlie_brown",
      email: "charlie@example.com",
      state: "Georgia",
      gender: "Male",
      status: "Active",
      verification: "Rejected",
    },
  ];

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "grid",
        gap: "25px",
      }}
    >
      <TopAddNewBar label={"Follower List"} />
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
};

export default Followerlist;
