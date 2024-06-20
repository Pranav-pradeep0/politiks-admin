import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Eye, Pencil, Trash, PlayCircle, X } from "@phosphor-icons/react";
import theme from "../../../../../theme";
import {
  getAllLeadersList,
  updateSettingsDetails,
  updateUserDetails,
} from "../../../../Service/allApi";

const sampleVideoURL = "https://www.w3schools.com/html/mov_bbb.mp4";
const sampleImageURL = "https://www.w3schools.com/w3images/lights.jpg";

const VerificationRequests = () => {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleOpenVideoModal = (videoUrl) => {
    setSelectedMedia(videoUrl);
    setOpenVideoModal(true);
  };

  const handleOpenImageModal = (imageUrl) => {
    setSelectedMedia(imageUrl);
    setOpenImageModal(true);
  };

  const handleCloseModal = () => {
    setOpenVideoModal(false);
    setOpenImageModal(false);
    setSelectedMedia(null);
  };

  const [leaderDetails, setLeaderDetails] = useState();

  const fetchLeaderDetails = async () => {
    const response = await getAllLeadersList();
    setLeaderDetails(response?.data?.leaders);
  };

  const handleStatusChange = async (action, id) => {
    const response = await updateUserDetails(action, id);
    console.log(response);
    fetchLeaderDetails();
  };

  const data = leaderDetails ? leaderDetails : [];

  const columns = [
    { field: "userid", headerName: "User ID" },
    { field: "username", headerName: "Username" },
    { field: "email", headerName: "Email" },
    {
      field: "video",
      headerName: "Video",
      renderCell: (value, row) => (
        <Button
          startIcon={<PlayCircle />}
          onClick={() => handleOpenVideoModal(row.video)}
        >
          View Video
        </Button>
      ),
    },
    {
      field: "id",
      headerName: "ID",
      renderCell: (value, row) => (
        <Button onClick={() => handleOpenImageModal(row.id)}>
          <img
            src={row.id}
            alt="ID"
            style={{
              width: "70px",
              height: "35px",
              position: "relative",
              borderRadius: "5px",
            }}
          />
          <span
            style={{
              position: "absolute",
              backgroundColor: "#3A7BD580",
              width: "70px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              borderRadius: "5px",
            }}
          >
            View
          </span>
        </Button>
      ),
    },
    {
      field: "action",
      headerName: "Status",
      renderCell: (value, row) => {
        let chipColor;
        switch (value.verification) {
          case "Approved":
            chipColor = "success";
            break;
          case "Declined":
            chipColor = "error";
            break;
          case "Pending":
            chipColor = "warning";
            break;
          default:
            chipColor = "default";
        }
        return (
          <Chip
            label={value.verification}
            color={chipColor}
            variant="outlined"
          />
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (value, row) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {value.verification === "Pending" ? (
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{
                  borderRadius: "5px",
                  width: "60px",
                }}
                onClick={() => handleStatusChange(true, value?.id)}
              >
                Approve
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                sx={{
                  borderRadius: "5px",
                  width: "60px",
                }}
                onClick={() => handleStatusChange(false, value?.id)}
              >
                Decline
              </Button>
            </Box>
          ) : value.verification === "Approved" ? (
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{
                borderRadius: "5px",
                width: "60px",
              }}
              onClick={() => handleStatusChange(false, value?.id)}
            >
              Decline
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              size="small"
              sx={{
                borderRadius: "5px",
                width: "60px",
              }}
              onClick={() => handleStatusChange(true, value?.id)}
            >
              Approve
            </Button>
          )}
        </Box>
      ),
    },
  ];

  const formatedRowsForDataTable = () => {
    return data?.map((item, ind) => ({
      userid: item.userId,
      username: item.userName,
      email: item.mailId,
      video: item.verificationDetails?.verificationVideo,
      id: item.verificationDetails?.verificationImage,
      action: {
        verification: item.action,
        id: item.userId,
      },
      status: item.status,
    }));
  };

  const rows = formatedRowsForDataTable();

  useEffect(() => {
    fetchLeaderDetails();
  }, []);

  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
        <Table size="small" aria-label="verification requests table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field} sx={{ color: "white" }}>
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.field} size="medium">
                    {column.renderCell
                      ? column.renderCell(row[column.field], row)
                      : row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openVideoModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            overflow: "hidden",
            padding: 0,
            margin: 0,
          },
        }}
      >
        <DialogContent
          sx={{
            padding: 0,
            margin: 0,
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {selectedMedia && (
            <video
              autoPlay
              loop
              controls
              style={{ width: "100%", padding: 0, margin: 0, display: "block" }}
            >
              <source src={selectedMedia} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", right: 0, top: 0, zIndex: 99 }}
          >
            <X color="white" />
          </IconButton>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openImageModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        PaperProps={{
          sx: {
            overflow: "hidden",
            padding: 0,
            margin: 0,
          },
        }}
      >
        <DialogContent
          sx={{
            padding: 0,
            margin: 0,
            position: "relative",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {selectedMedia && (
            <img
              src={selectedMedia}
              style={{
                width: "100%",
                height: "auto",
                padding: 0,
                margin: 0,
                display: "block",
              }}
            />
          )}
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", right: 0, top: 0, zIndex: 99 }}
          >
            <X color="white" />
          </IconButton>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VerificationRequests;
