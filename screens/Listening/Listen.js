import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ImageBackground,
} from 'react-native';

import ProgressBar from '../Volcabulary/components/ProgressBar';
import CheckButton from './components/checkButton';

import IconClose from '../Volcabulary/components/Icons/IconClose';
import ButtonWord from './components/buttonWord';
import IconSound from './components/iconSound';

var widthScreen = 0.9 * Dimensions.get('window').width;

class Listening extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list1: [],
      list2: ['a', 'teacher', 'Is', 'am', 'man', 'girl', 'I', 'doctor', 'Is', 'am'],
      sentence: 'I am a man',
      answer: '',
    };
  }

  pushList1AndDeleteItemInList2(data, key) {
    var a = this.state.list1;
    var b = this.state.list2;

    a.push(data);
    b.splice(key, 1);

    this.setState({
      list1: a,
      list2: b,
    });
  }

  pushList2AndDeleteItemInList1(data, key) {
    var a = this.state.list1;
    var b = this.state.list2;

    //push
    b.push(data);

    //delete
    a.splice(key, 1);

    this.setState({
      list1: a,
      list2: b,
    });
  }

  render() {
    return (
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
            <IconClose navigation={this.props.navigation} />
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
              progress={1/2}
            />
          </View>
        </View>

        <View
          style={{
            flex: 0.5,
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Nghe và hoàn thành câu
          </Text>
        </View>

        <View
          style={{
            flex: 6,
            flexDirection: 'column',
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
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
                img={require('../Listening/resources/sound.jpg')}
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
              flex: 3,
              flexDirection: 'column',
              marginLeft: 0.01 * widthScreen,
              marginRight: 0.01 * widthScreen,
            }}>
            <View
              style={{
                flex: 1,
                borderRadius: 10,
              }}>
              <ImageBackground
                source={require('./resources/back.png')}
                style={{
                  width: 322,
                  height: '100%',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}>
                {this.state.list1.map((item, key) => (
                  <ButtonWord
                    text={item}
                    action={() => this.pushList2AndDeleteItemInList1(item, key)}
                  />
                ))}
              </ImageBackground>
            </View>
            
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                width: 320,
                paddingTop: 20
              }}>
              {this.state.list2.map((item, key) => (
                <ButtonWord
                  text={item}
                  action={() => this.pushList1AndDeleteItemInList2(item, key)}
                />
              ))}
            </View>
          </View>
        </View>

        <View style={{flex: 0.8}}>
          <CheckButton
            correctSentence={this.state.sentence}
            answer={this.state.list1}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default Listening;
