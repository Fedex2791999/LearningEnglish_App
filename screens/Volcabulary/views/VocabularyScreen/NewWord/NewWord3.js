import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Button,
    Image,
    Alert
} from 'react-native';

import ProgressBar from '../../../components/ProgressBar';
import Question from '../../../components/Question';
import CheckButton from '../../../components/CheckButton/index';
import Answer from '../../../components/Answer/index';
import IconClose from '../../../components/Icons/IconClose';
import { TextInput } from 'react-native-gesture-handler';



var widthScreen = 0.9 * Dimensions.get('window').width;

class NewWord3 extends Component {
    constructor() {
        super();
    
        this.state =
          {
            Value1 : '',
            Value2 : '',
            Value3 : '',
            Value4 : '',
          }
      }
      checkPassword = (value1,value2,value3,value4) => {
        var count = 0;
        if (value1 == '1') {
            count++;
        }
        if (value2 == '2') {
            count++;
        }
        if (value3 == '3') {
            count++;
        }
        if (value4 == '4') {
            count++;
        }
        if (count == 4) {
            Alert.alert(
              'Số đáp án đúng: '+ count,
              'Đáp án chính xác',
              [
                {
                  text: 'Tiếp tục',
                  onPress: () => this.props.navigation.navigate('NewWord4')
                }
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert(
                'Số đáp án đúng: '+count,
              'Đáp án không chính xác',
              [
                {
                  text: 'Chọn lại',
                  onPress: () => this.props.navigation.navigate('NewWord3'),
                  style: 'cancel',
                },
                {
                  text: 'Tiếp tục',
                  onPress: () => this.props.navigation.navigate('NewWord4')
                },
              ],
              {cancelable: false},
            );
          }
      }
    render() {
        const {check, correctSentence, answer} = this.props;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                        <IconClose navigation={this.props.navigation}/>
                    </View>
                    <View style={{
                        flex: 9,
                        justifyContent: 'center'
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

                <View style={{
                    flex: 1,
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <Question titleQuestion= 'Điền đáp án thích hợp vào ô trống'/>
                </View>

                <View style={{
                    flex: 6,
                    flexDirection: 'column',
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image style={styles.logo} source={require('../../../assets/images/strawberry-icon.png')} ></Image>
                            <TextInput style={{marginTop: 10}} placeholder="________" 
                            onChangeText={(text) => { this.setState({ Value1: text }) }}></TextInput>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center'}}>
                            <Image style={styles.logo} source={require('../../../assets/images/orange.png')} ></Image>
                            <TextInput style={{marginTop: 10}} placeholder="________"
                            onChangeText={(text) => { this.setState({ Value2: text }) }}></TextInput>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center'}}>
                            <Image style={styles.logo} source={require('../../../assets/images/banana.png')} ></Image>
                            <TextInput style={{marginTop: 10}} placeholder="________"
                            onChangeText={(text) => { this.setState({ Value3: text }) }}></TextInput>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center'}} >
                            <Image style={styles.logo} source={require('../../../assets/images/apple.png')} ></Image>
                            <TextInput style={{marginTop: 10}} placeholder="________"
                            onChangeText={(text) => { this.setState({ Value4: text }) }}></TextInput>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                    style={[
                        styles.check1,
                        check
                        ? styles.changeBackgroundColorGray
                        : styles.changeBackgroundColorGreen,
                    ]}
                    onPress={() => this.checkPassword(this.state.Value1, this.state.Value2, this.state.Value3, this.state.Value4)}>
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
      },
      text: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      changeBackgroundColorGray: {
        backgroundColor: '#d9d9d9',
      },
      changeBackgroundColorGreen: {
        backgroundColor: '#40ff00',
      },
})
export default NewWord3;