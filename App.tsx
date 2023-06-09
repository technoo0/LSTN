// In App.js in a new project

import React, { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "./screens/WelcomeScreen"
import DetailsScreen from "./screens/DetailsScreen"
import LoginScreen from "./screens/LoginScreen"
import EmailScreen from './screens/EmailScreen';
import CodeScreen from './screens/CodeScreen';
import HomeScreen from './screens/HomeScreen';
import { checkAuth } from './utils/Auth';
import SplashScreen from './screens/SplashScreen';
import useStore from './store';
import UserInfoScreen from './screens/UserInfoScreen';
import LinkMusicApp from './screens/LinkMusicApp';
import SettingsScreen from './screens/SettingsScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();



function App() {
  const [initialRouteName, setinitialRouteName] = useState("Welcome")
  const [User, setUser] = useState({})
  const [loading, setLoading] = useState(true);
  const SaveDataOnOpen = async () => {
    try {

      const user = await checkAuth()
      if (user.msg == "OK") {
        useStore.setState({ user: user.user })
        setinitialRouteName("Home")

      } else {
        // console.log("maro faro", user)
        useStore.setState({ user: user.user })
        setUser(user.user)
        setinitialRouteName("UserInfo")
      }
    } catch (e) {
      console.log("splashScreenError", e)
    }
    setLoading(false);
  }

  useEffect(() => {
    SaveDataOnOpen()
  }, [])
  if (loading) {
    return <SplashScreen />; //Or something to show that you are still warming up!
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Email" component={EmailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Code" component={CodeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} options={{ headerShown: false }} initialParams={{ user: User }} />
        <Stack.Screen name="MusicApp" component={LinkMusicApp} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;