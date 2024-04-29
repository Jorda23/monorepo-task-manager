import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'react-native-gesture-handler';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_700Bold_Italic,
  Nunito_400Regular_Italic,
} from '@expo-google-fonts/nunito';

import { theme } from '../theme';
import Home from './page/Home';
import { Task } from './page/Task';
import { List } from './page/List';
import { store } from './store';

const Stack = createStackNavigator();

export type RootStackParamList = {
  home: undefined;
  task: undefined;
  list: undefined;
};

export const App = () => {
  const queryClient = new QueryClient();


  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_700Bold_Italic,
    Nunito_400Regular_Italic,
  });

  if (!fontsLoaded) {
    // Font is not yet loaded, you can render a loading indicator or return null
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <Stack.Navigator initialRouteName={'home'}>
              <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="task"
                component={Task}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="list"
                component={List}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
