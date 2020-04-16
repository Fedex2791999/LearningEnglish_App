import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import ProgressBar from '../../../components/ProgressBar';
import IconClose from '../../../components/Icons/IconClose';
import { TextInput } from 'react-native-gesture-handler';
var widthScreen = 0.9 * Dimensions.get('window').width;

class Listening extends Component {
  constructor() {
    super();

    this.state =
      {
        Value : '',
      }
  }
  checkPassword = (value) => {
    if (value == "He is a teacher") {
        Alert.alert(
          value,
          'Đáp án chính xác',
          [
            {
              text: 'Tiếp tục',
              onPress: () => this.props.navigation.navigate('Point')
            }
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          value,
          'Đáp án không chính xác',
          [
            {
              text: 'Chọn lại',
              onPress: () => this.props.navigation.navigate('Sentence4'),
              style: 'cancel',
            },
            {
              text: 'Tiếp tục',
              onPress: () => this.props.navigation.navigate('Point')
            },
          ],
          {cancelable: false},
        );
      }
  }

  render() {
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
              progress={0}
            />
          </View>
        </View>

        <View
          style={{
            flex: 0.5,
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Dịch câu sau sang tiếng anh
          </Text>
        </View>

        <View
          style={{
            flex: 6,
            flexDirection: 'column',
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{fontSize: 23}}>
              Anh ấy là một giáo viên
            </Text>
          </View>
          <View
            style={{
              flex: 4,
              flexDirection: 'column',
              marginLeft: 0.05 * widthScreen,
              marginRight: 0.05 * widthScreen,
            }}>
            <View
              style={{
                flex: 3,
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 10,
                flexWrap: 'wrap',
              }}>
              <TextInput style={{fontSize: 25}} placeholder="Điền vào phần này" onChangeText={(text) => { this.setState({ Value: text }) }}></TextInput>
              
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderRadius: 10,
                flexWrap: 'wrap',
              }}>
            </View>
          </View>
        </View>

        <View style={{flex: 0.8}}>
        <TouchableOpacity
               style={[
                 styles.check1
              ]}
              onPress={() => this.checkPassword(this.state.Value)}>
              <Text style={styles.text}>KIỂM TRA</Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    height: 80,
    width: 80,
    marginHorizontal: 5,
    marginVertical:5
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
export default Listening;
