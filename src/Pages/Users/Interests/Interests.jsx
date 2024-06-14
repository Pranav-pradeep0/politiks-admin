import React from "react";
import { Box, IconButton, Switch } from "@mui/material";
import DataTable from "../../../Components/DataTable"; // Adjust the import path as needed
import { Eye, Pencil, Trash } from "@phosphor-icons/react";
import theme from "../../../../theme";
import TopAddNewBar from "../../../Components/TopAddNewBar";

const Interests = () => {
  const columns = [
    { field: "slNo", headerName: "Sl No" },
    { field: "interestName", headerName: "Interest Name" },
    { field: "viewOrder", headerName: "View Order" },
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
      field: "actions",
      headerName: "Actions",
      renderCell: (value, row) => (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <IconButton>
            <Eye color="black" />
          </IconButton>
          <IconButton onClick={() => handleEdit(row.slNo)}>
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
      slNo: 1,
      interestName: "Federalism",
      viewOrder: 1,
      status: "Active",
    },
    {
      slNo: 2,
      interestName: "Technology",
      viewOrder: 2,
      status: "Inactive",
    },
    {
      slNo: 3,
      interestName: "Health Care",
      viewOrder: 3,
      status: "Active",
    },
  ];

  const handleEdit = (slNo) => {
    console.log(`Edit interest with Sl No: ${slNo}`);
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "grid",
        gap: "25px",
      }}
    >
      <TopAddNewBar label={"Interest List"} />
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
};

export default Interests;
