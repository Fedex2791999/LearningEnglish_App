import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import ProgressBar from '../Volcabulary/components/ProgressBar';

import IconClose from '../Volcabulary/components/Icons/IconClose';
import ButtonWord from './components/buttonWord';
import IconSound from './components/iconSound';
import {TextInput} from 'react-native-gesture-handler';
import CheckButton from '../Volcabulary/components/CheckButton/index';
import Answer from '../Volcabulary/components/Answer/index2';

var widthScreen = 0.9 * Dimensions.get('window').width;

const Listen2 = props => {
  const [Value1, setValue1] = useState('');
  const [Value2, setValue2] = useState('');
  const [Value3, setValue3] = useState('');

  const checkPassword = (value1, value2, value3) => {
    let count = 0;
    if (value1 == 'a') {
      count++;
    }
    if (value2 == 'a') {
      count++;
    }
    if (value3 == 'a') {
      count++;
    }
    if (count == 3) {
      Alert.alert(
        'Số đáp án đúng: ' + count,
        'Đáp án chính xác',
        [
          {
            text: 'Tiếp tục',
            onPress: () => props.navigation.navigate('Listen4'),
          },
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Số đáp án đúng: ' + count,
        'Đáp án không chính xác',
        [
          {
            text: 'Chọn lại',
            onPress: () => props.navigation.navigate('Listen3'),
            style: 'cancel',
          },
          {
            text: 'Tiếp tục',
            onPress: () => props.navigation.navigate('Listen4'),
          },
        ],
        {cancelable: false},
      );
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <IconClose navigation={props.navigation} />
          </View>
          <View
            style={{
              flex: 9,
              justifyContent: 'center',
            }}>
            <ProgressBar
              color={'#40ff00'}
              unfilledColor={'#d9d9d9'} //màu nền của progress
              borderColor={'#ffffff'} //màu viền biên ngoài
              borderRadius={10}
              height={18}
              width={widthScreen * 0.9}
              progress={0}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Nghe và hoàn thành câu
          </Text>
        </View>

        <View
          style={{
            flex: 8,
            flexDirection: 'column',
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginLeft: 0.1 * widthScreen,
                marginRight: 0.1 * widthScreen,
              }}>
              <IconSound
                styles={{width: 100, height: 100, borderRadius: 50}}
                // img={require('../Listening/resources/sound.jpg')}
                urlSound={require('../Listening/music/i_am_a_man.mp3')}
              />
              <IconSound
                styles={{width: 50, height: 50, borderRadius: 50, bottom: -30}}
                img={require('../Listening/resources/slow.png')}
                urlSound={require('../Listening/music/i_am_a_man.mp3')}
              />
            </View>
          </View>
          <View
            style={{
              flex: 8,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 25}}>1. He is </Text>
              <TextInput
                style={{fontSize: 25}}
                placeholder="___"
                onChangeText={text => {
                  setValue1(text);
                }}
              />
              <Text style={{fontSize: 25}}>student.</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 25}}>2. He is </Text>
              <TextInput
                style={{fontSize: 25}}
                placeholder="___"
                onChangeText={text => {
                  setValue2(text);
                }}
              />
              <Text style={{fontSize: 25}}>student.</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 25}}>3. He is </Text>
              <TextInput
                style={{fontSize: 25}}
                placeholder="___"
                onChangeText={text => {
                  setValue3(text);
                }}
              />
              <Text style={{fontSize: 25}}>student.</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 1.5}}>
          <TouchableOpacity
            style={[styles.check1]}
            onPress={() => checkPassword(Value1, Value2, Value3)}>
            <Text style={styles.text}>KIỂM TRA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    height: 80,
    width: 80,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  check1: {
    borderRadius: 8,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 0.05 * widthScreen,
    marginRight: 0.05 * widthScreen,
    backgroundColor: '#40ff00',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Listen2;
