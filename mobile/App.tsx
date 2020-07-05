import React from 'react';

import { AppLoading } from 'expo';

import Routes from './src/routes';

import { Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (<Routes/>);
}