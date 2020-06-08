import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ButtonWord = ({text, action}) => {
  return (
    <TouchableOpacity
      type="primary"
      style={{alignItems: 'stretch'}}
      onPress={action}>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'column',
          marginHorizontal: 5,
          marginVertical: 5,
          height: 46,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'stretch',
          backgroundColor: '#3fc8f1',
        }}>
        <Text style={{fontSize: 20}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWord;
