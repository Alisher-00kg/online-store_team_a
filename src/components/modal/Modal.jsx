import { Box, Fade, Modal as MUIModal } from "@mui/material";

export const Modal = ({ open, onClose, children, className }) => {
  return (
    <MUIModal open={open} onClose={onClose} className={className}>
      <Fade in={open}>
        <Box>{children}</Box>
      </Fade>
    </MUIModal>
  );
};
