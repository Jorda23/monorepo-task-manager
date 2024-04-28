import { Button } from '@mui/material';

import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Button variant="contained">Contained</Button>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
