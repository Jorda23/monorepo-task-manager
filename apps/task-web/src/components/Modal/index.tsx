import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '80%',
    sm: '70%',
    md: 400,
    lg: 400,
  },
  bgcolor: 'white',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const CustomModal = (props: Props) => {
  const { handleClose, isOpen, children } = props;

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      data-testid="custom-modal"
    >
      <Box
        sx={{
          ...style,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};
