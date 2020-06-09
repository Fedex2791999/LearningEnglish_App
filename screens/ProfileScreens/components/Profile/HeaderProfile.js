import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

const HeaderProfile = ({name, country}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50}}
          source={{uri: 'https://i.ibb.co/Bc5zQmM/8.jpg'}}
        />
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
            }}>
            {name}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {country}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderProfile;
