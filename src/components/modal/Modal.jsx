import React from "react";
import { Box, Modal as MUIModal } from "@mui/material";

export const Modal = ({ open, onClose, children, className }) => {
  return (
    <MUIModal open={open} onClose={onClose} className={className}>
      <Box>{children}</Box>
    </MUIModal>
  );
};
