import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Login from './pages/Login';
import SocialAuth from './pages/SocialAuth';
import Welcome from './pages/Welcome';
import Responsible from './pages/Responsible';
import ChildData from './pages/ChildData';
import Activities from './pages/Activities';
import History from './pages/History';
import Child from './pages/Child';

import { darkBlue, white } from './colors';

const Stack = createStackNavigator();

const Routes = () => {
  
  const options: StackNavigationOptions  = {
    title: "Login",
    headerLeft: null,
    headerTitleStyle: { alignSelf: "center"},
    headerStyle: { backgroundColor:  darkBlue },
    headerTintColor: white
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={options} name="SocialAuth" component={SocialAuth} />
        <Stack.Screen options={{headerShown:false}} name="Welcome" component={Welcome} />
        <Stack.Screen options={{headerShown:false}} name="Responsible" component={Responsible} />
        <Stack.Screen options={{headerShown:false}} name="ChildData" component={ChildData} />
        <Stack.Screen options={{headerShown:false}} name="Child" component={Child} />
        <Stack.Screen options={{headerShown:false}} name="History" component={History} />
        <Stack.Screen options={{headerShown:false}} name="Activities" component={Activities} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Routes;