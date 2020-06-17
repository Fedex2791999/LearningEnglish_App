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
import {Formik} from 'formik';
import * as yup from 'yup';
const SignUp = props => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Vui lòng nhập đúng định dạng email!')
      .required('Vui lòng nhập vào ô này!'),
    password: yup
      .string()
      .min(6, 'Mật khẩu phải có ít nhất 6 kí tự!')
      .required('Vui lòng nhập vào ô này!'),
    repass: yup
      .string()
      .required('Vui lòng nhập vào ô này!')
      .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp!'),
    username: yup.string().required('Vui lòng nhập vào ô này!'),
    fullname: yup.string().required('Vui lòng nhập vào ô này!'),
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repass: '',
          username: '',
          fullname: '',
        }}
        onSubmit={values => {
          console.log('hey');
          Alert.alert(
            '',
            'Đăng lý thành công!',
            [
              { text: 'OK', onPress: () => {
                console.log('OK Pressed')
                props.navigation.navigate('Login')
              } }
            ],
            { cancelable: false }
          );
        }}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldTouched,
          isValid,
        }) => (
          <View style={styles.container}>
            <View style={{marginVertical: 20}}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Image
                    style={styles.logo}
                    source={require('../../images/logo.png')}
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
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={() => {
                    setFieldTouched('email');
                    handleBlur('email');
                  }}
                />
                {touched.email && errors.email && (
                  <Text style={{fontSize: 10, color: 'red', marginLeft: 5}}>
                    {errors.email}
                  </Text>
                )}
              </View>

              <View style={styles.input_box}>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  onChangeText={handleChange('username')}
                  value={values.username}
                  onBlur={() => {
                    setFieldTouched('username');
                    handleBlur('username');
                  }}
                />
                {touched.username && errors.username && (
                  <Text style={{fontSize: 10, color: 'red', marginLeft: 5}}>
                    {errors.username}
                  </Text>
                )}
              </View>

              <View style={styles.input_box}>
                <TextInput
                  style={styles.input}
                  placeholder="Fullname"
                  onChangeText={handleChange('fullname')}
                  value={values.fullname}
                  onBlur={() => {
                    setFieldTouched('fullname');
                    handleBlur('fullname');
                  }}
                />
                {touched.fullname && errors.fullname && (
                  <Text style={{fontSize: 10, color: 'red', marginLeft: 5}}>
                    {errors.fullname}
                  </Text>
                )}
              </View>

              <View style={styles.input_box}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={() => {
                    setFieldTouched('password');
                    handleBlur('password');
                  }}
                />
                {touched.password && errors.password && (
                  <Text style={{fontSize: 10, color: 'red', marginLeft: 5}}>
                    {errors.password}
                  </Text>
                )}
              </View>

              <View style={styles.input_box}>
                <TextInput
                  style={styles.input}
                  placeholder="Re Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('repass')}
                  value={values.repass}
                  onBlur={() => {
                    setFieldTouched('repass');
                    handleBlur('repass');
                  }}
                />
                {touched.repass && errors.repass && (
                  <Text style={{fontSize: 10, color: 'red', marginLeft: 5}}>
                    {errors.repass}
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              style={
                isValid == true
                  ? {...styles.button, backgroundColor: '#F06060'}
                  : {...styles.button}
              }
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.tittleButton}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
    marginLeft: 20,
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
    backgroundColor: '#7777',
    marginHorizontal: 20,
  },
  input: {
    color: 'red',
  },
});
export default SignUp;
