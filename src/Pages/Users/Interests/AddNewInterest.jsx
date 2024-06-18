import { Box, Button, Divider, Modal, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import InputField from "../../../Components/InputField";
import { createInterest } from "../../../Service/allApi";
import { capitalizeFirstLetter } from "../../../Utils/utils";
import { Slide, ToastContainer, toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
};

const AddNewInterest = ({ modalOpen, setModalOpen }) => {
  const [newInterestData, setNewInterestData] = useState({
    name: "",
    viewOrder: "",
    status: true,
  });
  const [validationError, setValidationError] = useState();

  const onInputFieldChange = (e) => {
    const { name, value } = e.target;
    setNewInterestData((data) => ({
      ...data,
      [name]: capitalizeFirstLetter(value),
    }));
  };

  const handleAddNewInterest = async () => {
    if (
      validationError === null ||
      newInterestData.name !== "" ||
      newInterestData.viewOrder !== ""
    ) {
      const response = await createInterest(newInterestData);
      console.log(response);
      if (response.status === 201) {
        toast.success("Interest Successfully Created", {
          autoClose: 1000,
          transition: Slide,
        });
        setModalOpen(false);
        setNewInterestData({
          name: "",
          viewOrder: "",
          status: true,
        });
      }
    } else {
      toast.error("Please fill in all the fields", {
        autoClose: 1000,
        transition: Slide,
      });
    }
  };

  const handleModalClose = () => {
    setNewInterestData({
      name: "",
      viewOrder: "",
      status: true,
    });
    setModalOpen(false);
  };

  return (
    <>
      <ToastContainer position="top-center" transition={"Slide"} />
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "420px",
            display: "grid",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              textAlign={"center"}
              sx={{ marginBlock: "20px" }}
            >
              Add New Interest
            </Typography>

            <Divider />
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: "20px",
              padding: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Interest</Typography>
              <InputField
                placeholder={"Enter interest name"}
                name={"name"}
                type={"text"}
                value={newInterestData.name}
                onChange={onInputFieldChange}
                error={validationError}
                setError={setValidationError}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">View Order</Typography>
              <InputField
                onChange={onInputFieldChange}
                placeholder={"Enter view order"}
                type={"number"}
                value={newInterestData.viewOrder}
                name={"viewOrder"}
                error={validationError}
                setError={setValidationError}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Status</Typography>
              <Box
                sx={{
                  width: "130px",
                }}
              >
                <Switch
                  checked={newInterestData.status}
                  name="status"
                  onChange={(e) => {
                    setNewInterestData((data) => ({
                      ...data,
                      status: e.target.checked,
                    }));
                  }}
                />
              </Box>
            </Box>

            <Button variant="contained" onClick={handleAddNewInterest}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddNewInterest;
