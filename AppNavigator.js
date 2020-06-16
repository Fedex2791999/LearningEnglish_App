import React from 'react';
import SvgUri from 'react-native-svg-uri';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './components/Login';
import Open1 from './components/Open1';
import Open2 from './components/Open2';
import Open3 from './components/Open3';
import SignUp from './components/SignUp';
import HomeScreen from './screens/HomeScreen';
import ChartsScreen from './screens/ChartsScreen';
import ProflieScreen from './screens/ProfileScreen';
import StoreScreen from './screens/StoreScreen';
import NewWord from './screens/Volcabulary/views/VocabularyScreen/NewWord/NewWord';
import NewWord2 from './screens/Volcabulary/views/VocabularyScreen/NewWord/NewWord2';
import NewWord3 from './screens/Volcabulary/views/VocabularyScreen/NewWord/NewWord3';
import NewWord4 from './screens/Volcabulary/views/VocabularyScreen/NewWord/NewWord4';
import Sentence from './screens/Volcabulary/views/VocabularyScreen/Sentence/Sentence';
import Sentence2 from './screens/Volcabulary/views/VocabularyScreen/Sentence/Sentence2';
import Sentence3 from './screens/Volcabulary/views/VocabularyScreen/Sentence/Sentence3';
import Sentence4 from './screens/Volcabulary/views/VocabularyScreen/Sentence/Sentence4';
import Point from './screens/Volcabulary/views/Point/index';
import PlayList from './screens/Listening/index';
import Player from './screens/Listening/player';
import PlayMusic from './screens/Listening/playMusic';
import Listening from './screens/Listening/Listen';
import Listening2 from './screens/Listening/Listen2';
import Listening3 from './screens/Listening/Listen3';
import Listening4 from './screens/Listening/Listen4';
import Script from './screens/Listening/script';


//listen  who you are
const HomeStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({focused, horizontal, tintColor}) =>
    focused ? (
      <SvgUri
      width="40"
      height="40"
        source={{
          uri: 'https://svgshare.com/i/Lvp.svg',
        }}
      />
    ) : (
      <SvgUri
        width="40"
        height="40"
        source={{
          uri: 'https://svgshare.com/i/LuK.svg',
        }}
      />
    ),
};

HomeStack.path = '';

const ChartsStack = createStackNavigator(
  {
    Charts: {screen: ChartsScreen},
  },
  {
    initialRouteName: 'Charts',
    headerMode: 'none',
  },
);

ChartsStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({focused, horizontal, tintColor}) =>
    focused ? (
      <SvgUri
        width="40"
        height="40"
        source={{
          uri: 'https://svgshare.com/i/Lui.svg',
        }}
      />
    ) : (
      <SvgUri
        width="40"
        height="40"
        source={{
          uri: 'https://svgshare.com/i/LvE.svg',
        }}
      />
    ),
};
ChartsStack.path = '';

const StoreStack = createStackNavigator(
  {
    Store: {screen: StoreScreen},
  },
  {
    initialRouteName: 'Store',
    headerMode: 'none',
  },
);

StoreStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({focused, horizontal, tintColor}) =>
    focused ? (
      <SvgUri
        width="40"
        height="40"
        source={{
          uri: 'https://svgshare.com/i/LvF.svg',
        }}
      />
    ) : (
      <SvgUri
        width="40"
        height="40"
        source={{
          uri: 'https://svgshare.com/i/LuL.svg',
        }}
      />
    ),
};
StoreStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: {screen: ProflieScreen},
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);

ProfileStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({focused, horizontal, tintColor}) =>
    focused ? (
      <SvgUri
        width="45"
        height="45"
        source={{
          uri: 'https://svgshare.com/i/Lv_.svg',
        }}
      />
    ) : (
      <SvgUri
        width="45"
        height="45"
        source={{
          uri: 'https://svgshare.com/i/Lw7.svg',
        }}
      />
    ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    StoreStack,
    ChartsStack,
    ProfileStack,
  },
  {
    tabBarOptions: {
      style: {height: 80, paddingTop: 20, margin: 0,backgroundColor:'#eef2f4'},
    },
    navigationOptions: {
      header: null,
    },
  },
);

tabNavigator.path = '';

const authenStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    // headerBackTitle: 'Home',
    // headerBackground: 'red'
  },
);
const AppNavigator = createSwitchNavigator({
  Authen: authenStack,
  Sentence4: {screen: Sentence4},
  Sentence3: {screen: Sentence3},
  Sentence: {screen: Sentence},
  Sentence2: {screen: Sentence2},

  Listen: {screen: Listening},
  Listen2: {screen: Listening2},
  Listen3: {screen: Listening3},
  Listen4: {screen: Listening4},

  Main: tabNavigator,

  NewWord: {screen: NewWord},
  NewWord2: {screen: NewWord2},
  NewWord3: {screen: NewWord3},
  NewWord4: {screen: NewWord4},

  Player: {screen: Player},
  PlayMusic: {screen: PlayMusic},
  PlayList: {screen: PlayList},
  Script: {screen: Script},
  Point: {screen: Point},
  Open1: {screen: Open1},
  Open2: {screen: Open2},
  Open3: {screen: Open3},
});
export default createAppContainer(AppNavigator);
