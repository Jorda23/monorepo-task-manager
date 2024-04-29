import { Box, Typography } from '@mui/material';
import { AiOutlineDropbox } from 'react-icons/ai';

export const EmptyTaskMessage = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <AiOutlineDropbox fontSize={'100px'} data-testid="dropbox-icon" />
      <Typography variant="h6">There are no tasks yet</Typography>
    </Box>
  );
};
