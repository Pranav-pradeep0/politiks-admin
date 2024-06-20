import React, { useEffect, useState } from "react";
import { Box, Button, Chip, IconButton, Switch } from "@mui/material";
import DataTable from "../../../../Components/DataTable";
import { Eye, Pencil, Trash } from "@phosphor-icons/react";
import theme from "../../../../../theme";
import { getApprovedAdminList } from "../../../../Service/allApi";

const Leaderlist = () => {
  const [ApprovedLeaderDetails, setApprovedLeaderDetails] = useState();

  const fetchApprovedAdminList = async () => {
    const response = await getApprovedAdminList();
    setApprovedLeaderDetails(response?.data);
  };

  const data = ApprovedLeaderDetails ? ApprovedLeaderDetails : [];

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
          checked={value}
          color="primary"
          inputProps={{ "aria-label": "controlled" }}
        />
      ),
    },
    {
      field: "status",
      headerName: "Verification",
      renderCell: (value, row) => {
        // let chipColor;
        // switch (row.verification) {
        //   case "Verified":
        //     chipColor = "success";
        //     break;
        //   case "Rejected":
        //     chipColor = "error";
        //     break;
        //   case "Pending":
        //     chipColor = "warning";
        //     break;
        //   default:
        //     chipColor = "default";
        // }
        return <Chip label={"Approved"} color={"success"} variant="outlined" />;
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

  const formatedRowsForDataTable = () => {
    return data?.map((item, ind) => ({
      userid: item.userId,
      username: item.userName,
      email: item.mailId,
      state: item.state,
      gender: item.state,
      status: item.status,
      verification: "Pending",
    }));
  };

  const rows = formatedRowsForDataTable();

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
  };

  useEffect(() => {
    fetchApprovedAdminList();
  }, []);

  return <DataTable columns={columns} rows={rows} />;
};

export default Leaderlist;
