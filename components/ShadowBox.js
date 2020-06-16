import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ShadowBox() {
  return (
    <View style={styles.container}>

    <View elevation={5} style={styles.buttonContainer}>
      <Text style={styles.textStyle}>Shadow Applied</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  textStyle: {
    color: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  elevation: 5
})
