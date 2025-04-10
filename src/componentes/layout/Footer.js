import React from "react";
import {Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: "#1976d2", color: "white", textAlign: "center", py: 2, mt: "auto" }}>
      <Typography variant="body2">&copy; 2025 Bar do Sony.</Typography>
    </Box>
  );
}
