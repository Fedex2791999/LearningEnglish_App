import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

class IconClose extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Main')}
        style={{marginRight: 15}}>
        <Image
          style={{height: 30, width: 30}}
          source={{uri: 'https://i.ibb.co/h1Z9SD3/unnamed.png'}}
        />
      </TouchableOpacity>
    );
  }
}

export default IconClose;
