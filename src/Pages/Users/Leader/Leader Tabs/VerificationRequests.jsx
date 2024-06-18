import React, { useState } from "react";
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

// Sample video URL and image URL
const sampleVideoURL = "https://www.w3schools.com/html/mov_bbb.mp4";
const sampleImageURL = "https://www.w3schools.com/w3images/lights.jpg";

const VerificationRequests = () => {
  // State to manage the modal open/close for video and image
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Handle opening the video modal
  const handleOpenVideoModal = (videoUrl) => {
    setSelectedMedia(videoUrl);
    setOpenVideoModal(true);
  };

  // Handle opening the image modal
  const handleOpenImageModal = (imageUrl) => {
    setSelectedMedia(imageUrl);
    setOpenImageModal(true);
  };

  // Handle closing the modals
  const handleCloseModal = () => {
    setOpenVideoModal(false);
    setOpenImageModal(false);
    setSelectedMedia(null);
  };

  // Define the columns
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
      field: "status",
      headerName: "Status",
      renderCell: (value, row) => {
        let chipColor;
        switch (row.status) {
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
        return <Chip label={row.status} color={chipColor} variant="outlined" />;
      },
    },
    {
      field: "status",
      headerName: "Actions",
      renderCell: (value, row) => (
        <Box sx={{ display: "flex", gap: "5px" }}>
          {value === "Declined" ? (
            <Button
              variant="contained"
              color="success"
              size="small"
              sx={{
                borderRadius: "5px",
                width: "60px",
              }}
            >
              Approve
            </Button>
          ) : (
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{
                borderRadius: "5px",
                width: "60px",
              }}
            >
              Decline
            </Button>
          )}
        </Box>
      ),
    },
  ];

  const rows = [
    {
      userid: 1,
      username: "john_doe",
      email: "john@example.com",
      video: sampleVideoURL,
      id: sampleImageURL,
      status: "Approved",
    },
    {
      userid: 2,
      username: "jane_doe",
      email: "jane@example.com",
      video: sampleVideoURL,
      id: sampleImageURL,
      status: "Declined",
    },
  ];

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
              alt="ID Preview"
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
