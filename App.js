import React from 'react';
import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/components/screens/homeScreen';
import CadastroScreen from './src/components/screens/cadastroScreen';
import EdicaoScreen from './src/components/screens/edicaoScreen';
import EdicaoPetScreen from './src/components/screens/edicaoPetScreen';

const Stack = createStackNavigator();

const App = () => {
  LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CadastroScreen"
          component={CadastroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EdicaoScreen"
          component={EdicaoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EdicaoPetScreen"
          component={EdicaoPetScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
