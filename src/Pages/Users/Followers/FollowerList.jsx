import React, { useEffect, useState } from "react";
import { Box, Chip, IconButton, Switch } from "@mui/material";
import { Eye, Pencil, Trash } from "@phosphor-icons/react";
import theme from "../../../../theme";
import DataTable from "../../../Components/DataTable";
import TopAddNewBar from "../../../Components/TopAddNewBar";
import { getAllFollowerDetails } from "../../../Service/allApi";

const Followerlist = () => {
  const [followerData, setFollowerData] = useState();

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
          checked={row.status}
          color="primary"
          inputProps={{ "aria-label": "controlled" }}
        />
      ),
    },
    {
      field: "id",
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
          <IconButton onClick={() => handleEdit(value)}>
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
    return followerData?.map((item, ind) => ({
      slNo: ind + 1,
      id: item.id,
      userid: item.userId,
      username: item.userName,
      email: item.mailId,
      state: item.state,
      gender: item.gender,
      status: item.status,
    }));
  };

  const rows = formatedRowsForDataTable();

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
  };

  const fetchAllFollowers = async () => {
    const response = await getAllFollowerDetails();
    setFollowerData(response.data);
    console.log(response);
  };

  useEffect(() => {
    fetchAllFollowers();
  }, []);

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
