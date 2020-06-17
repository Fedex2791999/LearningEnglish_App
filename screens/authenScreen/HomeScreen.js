import React from 'react';
import {View, Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import HomeScreens from '../HomeScreens/views/HomeScreen';

const HomeScreen = props => {
  return (
    <View style={{flex: 1}}>
      <HomeScreens navigation={props.navigation} />
    </View>
  );
};

export default HomeScreen;
