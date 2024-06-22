import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import TopAddNewBar from "../../Components/TopAddNewBar";
import { ArrowLeft, Pencil, Plus, Trash } from "@phosphor-icons/react";
import LabeldInputField from "../../Components/LabeldInputField";
import InputField from "../../Components/InputField";
import theme from "../../../theme";

const AddNewAdmin = () => {
  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: "30px",
        }}
      >
        <TopAddNewBar
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconButton color="inherit">
                <ArrowLeft />
              </IconButton>
              Add New User Role
            </Box>
          }
          buttonLabel={" Save "}
          buttonStyles={{
            width: "130px",
          }}
        />

        <Box
          sx={{
            display: "flex",
            gap: "100px",
          }}
        >
          <LabeldInputField
            label={"Name"}
            input={<InputField styles={{ width: "400px" }} />}
          />
          <LabeldInputField gap={"50px"} label={"Status"} input={<Switch />} />
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography sx={{ width: "145px" }}>Access to</Typography>
          <Box sx={{ display: "grid", gap: "20px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
              }}
            >
              <InputField />
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Read and Write"
                    control={<Radio />}
                    label="Read and Write"
                  />
                  <FormControlLabel
                    value="Read Only"
                    control={<Radio />}
                    label="Read Only"
                  />
                </RadioGroup>
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <IconButton>
                  <Pencil weight="fill" color={theme.palette.info.main} />
                </IconButton>
                <IconButton>
                  <Trash weight="fill" color={theme.palette.error.main} />
                </IconButton>
              </Box>
              <Button variant="outlined">
                <Plus size={17} style={{ marginRight: "5px" }} /> Add New
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
              }}
            >
              <InputField />
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Read and Write"
                    control={<Radio />}
                    label="Read and Write"
                  />
                  <FormControlLabel
                    value="Read Only"
                    control={<Radio />}
                    label="Read Only"
                  />
                </RadioGroup>
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <IconButton>
                  <Pencil weight="fill" color={theme.palette.info.main} />
                </IconButton>
                <IconButton>
                  <Trash weight="fill" color={theme.palette.error.main} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddNewAdmin;
