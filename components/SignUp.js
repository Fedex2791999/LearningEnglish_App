import React, {useState} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert,
  Dimensions,
} from 'react-native';

const SignUp = (props) => {
  const [Password, setPass] = useState('');
  const [RePassword, setRePass] = useState('');
  const [Username, setUsername] = useState('');
  const [FullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');

  const Simple_If_Else = () => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (Password != RePassword) {
      Alert.alert('Password does not match');
    } else if (Password < 8 || Username < 8) {
      Alert.alert('Username or Password length less than 8 character');
    }
    // else if (Password > 32 || Username > 32) {
    //   Alert.alert("Username or Password length more than 32 character");
    // }
    // else if (reg.test(email) == false) {
    //   Alert.alert("Email is Not Correct");
    // }
    else if (reg.test(email) == true) {
      Alert.alert('Email Correct');
    } else {
      Alert.alert(
        'THÔNG BÁO',
        'Đăng ký thành công',
        [
          {
            text: 'OK',
            onPress: () => props.navigation.navigate('Login'),
          },
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
              <Image
                style={styles.logo}
                source={require('../images/logo.png')}
              />
              <Text style={styles.title}>Go English </Text>
            </View>
          </View>
        </View>
        <View style={styles.input_container}>
          <Text
            style={{
              color: '#F06060',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 20,
            }}>
            Hãy đăng ký ngay để bắt đầu học nào!!!
          </Text>
          <View style={styles.input_box}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              onChangeText={text => {
                setEmail(text)
              }}
            />
          </View>

          <View style={styles.input_box}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              onChangeText={text => {
                setUsername(text)
              }}
            />
          </View>

          <View style={styles.input_box}>
            <TextInput
              style={styles.input}
              placeholder="Fullname"
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              onChangeText={text => {
                setFullName(text)
              }}
            />
          </View>

          <View style={styles.input_box}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              onChangeText={text => {
                setPass(text)
              }}
            />
          </View>

          <View style={styles.input_box}>
            <TextInput
              style={styles.input}
              placeholder="Re Password"
              secureTextEntry={true}
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              onChangeText={text => {
                    setRePass(text)
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={Simple_If_Else}>
          <Text style={styles.tittleButton}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#eac3b0',
    paddingBottom: 30,

    // backgroundColor: '#dcecc7',
  },
  logo: {
    height: 80,
    width: 80,
    marginLeft: 10,
  },
  input_container: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
  },
  input_box: {
    borderBottomWidth: 1,
    borderBottomColor: '#CFD4DA',
    opacity: 0.5,
    color: '#777777',
    fontSize: 14,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tittleButton: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  button: {
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: '#F06060',
    marginHorizontal: 20,
  },
});
export default SignUp;
