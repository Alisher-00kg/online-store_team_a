import { Box, Fade, Modal as MUIModal } from "@mui/material";

export const Modal = ({ open, onClose, children, className }) => {
  return (
    <MUIModal
      open={open}
      onClose={onClose}
      className={className}
      BackdropProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.5)" }, 
      }}
    >
      <Fade in={open}>
        <Box>{children}</Box>
      </Fade>
    </MUIModal>
  );
};
