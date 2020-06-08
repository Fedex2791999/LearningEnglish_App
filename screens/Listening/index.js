import React from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import IconBack from './components/IconBack';
import Audio from './audio';

const audio = [
  {
    title: 'dailylife001',
    url: require('./music/dailylife001.mp3'),
  },
  {
    title: 'dailylife002',
    url: require('./music/dailylife002.mp3'),
  },
  {
    title: 'dailylife003',
    url: require('./music/dailylife003.mp3'),
  },
  {
    title: 'dailylife004',
    url: require('./music/dailylife004.mp3'),
  },
  {
    title: 'dailylife005',
    url: require('./music/dailylife005.mp3'),
  },
  {
    title: 'dailylife006',
    url: require('./music/dailylife006.mp3'),
  },
  {
    title: 'dailylife007',
    url: require('./music/dailylife007.mp3'),
  },
  {
    title: 'dailylife008',
    url: require('./music/dailylife008.mp3'),
  },
  {
    title: 'dailylife009',
    url: require('./music/dailylife009.mp3'),
  },
  {
    title: 'dailylife010',
    url: require('./music/dailylife010.mp3'),
  },
];

const PlayList = props => {
  return (
    <ScrollView>
      <View style={{height: 50, flexDirection: 'row'}}>
        <View
          style={{
            flex: 4,
            backgroundColor: 'blue',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <IconBack navigation={props.navigation} screen="Main" />
          </View>
          <Text
            style={{
              flex: 4,
              fontSize: 28,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Listening
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate('Script')}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Script
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {audio.map(testInfo => {
        return (
          <Audio
            title={testInfo.title}
            key={testInfo.title}
            handle={() => {
              props.navigation.navigate('PlayMusic', {
                id: testInfo.title,
                filepath: testInfo.url,
              });
            }}
          />
        );
      })}
    </ScrollView>
  );
};
export default PlayList;
