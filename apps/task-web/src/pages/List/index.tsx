import {
  Box,
  ListItem,
  Stack,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import Layout from '../../components/Layout';
import { Loading } from '../../components/Loading';
import Navbar from '../../components/Navbar';
import { CustomAvatar } from '../../components/CustomAvatar';
import { useGetElementsQuery } from '../../services/ElementList.services';

interface User {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

const ListManager = () => {
  const { data: elements, error, isLoading } = useGetElementsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>An unexpected error occurred.</div>;
  }

  if (!elements) {
    return null;
  }

  return (
    <Layout>
      <Navbar title={'List'} />

      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          direction="column"
          justifyContent={'center'}
          sx={{
            width: '100%',
            height: '100%',
            gap: '20px',
            padding: '20px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '100px',
            
            }}
          >
            <List
              dense
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
            >
              {elements.map((element: User) => (
                <ListItem key={element.id} disablePadding>
                  <ListItemButton>
                    <ListItemAvatar>
                      <CustomAvatar
                        name={element.name}
                        srcImage={element.avatar}
                      />
                    </ListItemAvatar>
                    <ListItemText id={element.id} primary={`${element.name}`} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default ListManager;
