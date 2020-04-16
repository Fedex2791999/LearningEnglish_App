import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Profile from './ProfileScreens/views/Profile/Profile';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <View style={{flex: 1}}>
            <Profile navigation={this.props.navigation}/>
        </View>
    )
}
}

export default ProfileScreen;