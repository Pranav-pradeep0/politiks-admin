import { Box, Button } from "@mui/material";
import { Plus } from "@phosphor-icons/react";
import React from "react";

const TopAddNewBar = ({
  label,
  onAddButtonClick,
  buttonLabel,
  buttonStyles,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box>
        <span style={{ fontWeight: 700, fontSize: "20px" }}>{label}</span>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            ...buttonStyles,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
          onClick={onAddButtonClick}
        >
          {buttonLabel ? (
            buttonLabel
          ) : (
            <>
              <Plus size={17} />
              <span>Add new</span>
            </>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default TopAddNewBar;
