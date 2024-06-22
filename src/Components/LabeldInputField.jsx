import React from "react";
import { Box, Typography } from "@mui/material";

const LabeldInputField = ({ label, input, gap }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "max-content",
        gap: gap ? gap : "100px",
      }}
    >
      <Typography>{label}</Typography>
      {input}
    </Box>
  );
};

export default LabeldInputField;
