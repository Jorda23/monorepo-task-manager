import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
import { TaskList } from './page/TaskList';

const Stack = createStackNavigator();

export type RootStackParamList = {
  home: undefined;
  task: undefined;
  taskList: undefined;
};

export const App = () => {
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
            name="taskList"
            component={TaskList}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
