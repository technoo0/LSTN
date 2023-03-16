// In App.js in a new project

import * as React from 'react';
import { ImageBackground, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/DetailsScreen"
import LoginScreen from "./screens/LoginScreen"
import EmailScreen from './screens/EmailScreen';
import CodeScreen from './screens/CodeScreen';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Email" component={EmailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Code" component={CodeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;