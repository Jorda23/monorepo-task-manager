import { Box, Stack } from '@mui/material';
import { GrTask } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/Layout';
import { CustomButton } from '../../components/Button';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => () => {
    navigate(path);
  };

  return (
    <Layout>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          direction="column"
          justifyContent={'center'}
          sx={{
            width: {
              xs: '60%',
              sm: '30%',
              md: '30%',
              lg: '30%',
              xl: '30%',
            },
            height: '40%',
            gap: '20px',
            padding: '40px',
            borderRadius: '8px',
            background: 'white',
            boxShadow: 5,
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <GrTask fontSize={'100px'} />
          </Box>

          <CustomButton label={'Tasks'} onClick={handleNavigation('/tasks')} />

          <CustomButton label={'List'} onClick={handleNavigation('/list')} />
        </Stack>
      </Box>
    </Layout>
  );
};

export default Home;
