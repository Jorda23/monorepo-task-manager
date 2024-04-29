import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ManagerRoutes } from './routes';
import { store } from './store';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <ManagerRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
