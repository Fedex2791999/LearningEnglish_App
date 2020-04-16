/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      EmailValue: '',
      PassWordValue: '',
    };
  }

  checkPassword = (email, pass) => {
    if (email === 'Fedex2791999' && pass === 'moi') {
      this.props.navigation.navigate('Open2');
    } else if (email === '' && pass === 'cu') {
      this.props.navigation.navigate('Main');
    } else {
      Alert.alert('sai mat khau');
    }
  };

  render() {
    const Divider = props => {
      return (
        <View {...props}>
          <View style={styles.line} />
          <Text style={styles.orText}>HOẶC</Text>
          <View style={styles.line} />
        </View>
      );
    };
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Image style={styles.logo} source={require('../images/logo.png')} />
            <Text style={styles.title}>Ứng dụng học tiếng Anh</Text>
          </View>

          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Enter your email or username"
                onChangeText={text => {
                  this.setState({EmailValue: text});
                }}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry={true}
                onChangeText={text => {
                  this.setState({PassWordValue: text});
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() =>
                this.checkPassword(
                  this.state.EmailValue,
                  this.state.PassWordValue,
                )
              }>
              <Text style={styles.tittleButton}> Đăng nhập </Text>
            </TouchableOpacity>
            <Divider style={styles.divider} />
            <FontAwesome.Button
              style={styles.facebookButton}
              name="facebook"
              backgroundColor="#3b5998">
              <Text style={styles.tittleButton}> Đăng nhập với Facebook </Text>
            </FontAwesome.Button>
          </View>
          <View style={styles.signUp}>
            <Text style={styles.tittleButton}>Bạn chưa có tài khoản? </Text>
            <Text
              style={styles.textSignUp}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              Đăng ký nhanh
            </Text>
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
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#8af38e',
  },
  up: {
    flex: 2.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  down: {
    flex: 5.5,
    flexDirection: 'column',
    justifyContent: 'flex-start', // Bắt đầu từ trên xuống dưới
    alignItems: 'center',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 35,
    marginBottom: 10,
  },
  textInput: {
    width: 280,
    height: 45,
  },
  loginButton: {
    marginTop: 30,
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e60000',
  },
  tittleButton: {
    color: 'white',
    fontSize: 20,
  },
  facebookButton: {
    borderRadius: 6,
    width: 300,
    height: 45,
    justifyContent: 'center',
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  orText: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    width: 298,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 60,
    marginBottom: 5,
  },
  signUp: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textSignUp: {
    color: 'blue',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
