import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const Answer = ({url, text, isActive}) => {
  return (
    <View
      style={[
        styles.touchableOpacity,
        isActive ? styles.borderColorGreen : styles.borderColorGray,
      ]}>
      <Image source={url} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  touchableOpacity: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    height: 45,
    width: 120,
  },
  borderColorGray: {
    borderColor: '#8c8c8c',
  },
  borderColorGreen: {
    borderColor: '#008000',
    backgroundColor: '#99ff66',
  },
  image: {
    width: 5,
    height: 5,
  },
  text: {
    color: '#008000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Answer;
