import React from 'react';

import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Icon
 from 'react-native-vector-icons/FontAwesome';
const widthScreen = Dimensions.get('window').width;
const BodyProfile = ({url, titletext, bodytext, navigation, nameScreen}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        marginLeft: 0.05 * widthScreen,
        marginRight: 0.05 * widthScreen,
        flex: 1,
      }}
      onPress={() => navigation.navigate(nameScreen)}>
      <View style={{flex: 1, paddingTop: 5}}>
        <Image style={{height: 30, width: 30}} source={url} />
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: 'column',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{titletext}</Text>
        <Text style={{fontSize: 18, color: '#a6a6a6', marginBottom:15}}>{bodytext}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BodyProfile;
