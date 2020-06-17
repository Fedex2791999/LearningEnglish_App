import React from 'react';
import {ScrollView, Image, Text, View, Dimensions} from 'react-native';

var heightScreen = Dimensions.get('window').height;
var widthScreen = Dimensions.get('window').width;

const Level = ({uri}) => {
  return (
    <View
      style={{
        height: heightScreen / 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View
        style={{backgroundColor: '#d9d9d9', height: 4, width: widthScreen / 4}}
      />
      <Image style={{width: 100, height: 100}} source={{uri: uri}} />
      <View
        style={{backgroundColor: '#d9d9d9', height: 4, width: widthScreen / 4}}
      />
    </View>
  );
};
export default Level;
