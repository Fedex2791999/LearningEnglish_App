import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native'

export default class SignUp extends React.Component {
  

  constructor() {
    super();

    this.state =
      {
        Password: '',
        RePassword: '',
        Username: '',
        Email: ''
      }
  }


  Simple_If_Else = () => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (this.state.Password != this.state.RePassword) {

      Alert.alert("Password does not match");
    }
    else if (this.state.Password < 8 || this.state.Username < 8) {
      Alert.alert("Username or Password length less than 8 character");
    }
    // else if (this.state.Password > 32 || this.state.Username > 32) {
    //   Alert.alert("Username or Password length more than 32 character");
    // }
    // else if (reg.test(this.state.email) == false) {
    //   Alert.alert("Email is Not Correct");
    // }
    else if (reg.test(this.state.email) == true) {
      Alert.alert("Email Correct");
    }
    else{
      Alert.alert(
        'THÔNG BÁO',
        'Đăng ký thành công',
        [
          {
            text: 'OK',
            onPress: () => this.props.navigation.navigate('Login')
          }
        ],
        {cancelable: false},
      );
    }

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.header}>Đăng ký</Text>
          <TextInput
            style={styles.input}
            placeholder='Username'
            autoCapitalize="none"
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => { this.setState({ Username: text }) }}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => { this.setState({ Password: text }) }}
          />
          <TextInput
            style={styles.input}
            placeholder='Re Password'
            secureTextEntry={true}
            autoCapitalize="none"
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => { this.setState({ RePassword: text }) }}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => { this.setState({ Email: text }) }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.Simple_If_Else.bind(this)}
          >
            <Text style={styles.tittleButton}> Đăng ký </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    height: 50,
    marginBottom: 40,
    width: 300,
    color: 'blue',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 34,
    color: "blue",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    fontWeight: 'bold'
  },
  button: {
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
    fontWeight: 'bold'
  }
})