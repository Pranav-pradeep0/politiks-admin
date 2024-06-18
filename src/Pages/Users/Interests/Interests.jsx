import React, { useEffect, useState } from "react";
import { Box, IconButton, Switch } from "@mui/material";
import DataTable from "../../../Components/DataTable"; // Adjust the import path as needed
import { Eye, Pencil, Trash } from "@phosphor-icons/react";
import theme from "../../../../theme";
import TopAddNewBar from "../../../Components/TopAddNewBar";
import { getAllInterests } from "../../../Service/allApi";
import AddNewInterest from "./AddNewInterest";

const columns = [
  { field: "slNo", headerName: "Sl No" },
  { field: "interestName", headerName: "Interest Name" },
  { field: "viewOrder", headerName: "View Order" },
  {
    field: "status",
    headerName: "Status",
    renderCell: (value, row) => (
      <Switch
        checked={row.status === true}
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

const Interests = () => {
  const [interests, setAllInterests] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (slNo) => {
    console.log(`Edit interest with Sl No: ${slNo}`);
  };

  const fetchAllInterests = async () => {
    const response = await getAllInterests();
    const { data } = response;
    console.log(data);
    setAllInterests(data);
  };

  const formatedRowsForDataTable = () => {
    return interests?.map((item, ind) => ({
      slNo: ind + 1,
      id: item.id,
      interestName: item.name,
      status: item.status || true,
      actions: item._id,
      viewOrder: item.viewOrder,
    }));
  };

  const rows = formatedRowsForDataTable();

  useEffect(() => {
    fetchAllInterests();
  }, [modalOpen]);

  return (
    <Box
      sx={{
        padding: "30px",
        display: "grid",
        gap: "25px",
      }}
    >
      <TopAddNewBar
        label={"Interest List"}
        onAddButtonClick={() => setModalOpen(true)}
      />
      <DataTable columns={columns} rows={rows} />
      <AddNewInterest modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Box>
  );
};

export default Interests;
