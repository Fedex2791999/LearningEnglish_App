import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const IconClose = ({screen, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <Image
        style={{height: 30, width: 30}}
        source={{uri: 'https://imgur.com/YmEWh2n.png'}}
      />
    </TouchableOpacity>
  );
};

export default IconClose;
