import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Profile from '../ProfileScreens/views/Profile/Profile';

const ProfileScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Profile navigation={props.navigation} />
    </View>
  );
};

export default ProfileScreen;
