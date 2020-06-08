import React, {useState, useEffect} from 'react';
import {AppRegistry} from 'react-native';
import Splash from './components/Splash';
import AppNavigator from './AppNavigator';
import {name as appName} from './app.json';

const Main = () => {
  const [isLoading, setLoading] = useState(true);
  const loadingApp = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    console.log('A');
    loadingApp();
    return () => {
      console.log('B');
    };
  }, []);
  console.log('C');
  return isLoading == true ? <Splash /> : <AppNavigator />;
};
AppRegistry.registerComponent(appName, () => Main);
