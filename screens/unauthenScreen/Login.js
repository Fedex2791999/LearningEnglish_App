import React, {useState} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
const Login = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const checkPassword = (email, pass) => {
    console.log('check Password');
    if (email === 'buiquanghuy@gmail.com' && pass === '123456') {
      navigation.navigate('Subject');
    } else {
      Alert.alert('sai ten hoac mat khau');
    }
  };

  const handleLogin = values => {
    setLoading(true);
    setTimeout(() => {
      console.log('waitingLogin');
      setLoading(false);
      checkPassword(values.email, values.password);
    }, 4000);
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Vui lòng nhập đúng định dạng email!')
      .required('Vui lòng nhập vào ô này!'),
    password: yup
      .string()
      .min(6, 'Mật khẩu phải có ít nhất 6 kí tự!')
      .required('Vui lòng nhập vào ô này!'),
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          console.log(values);
          handleLogin(values);
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
            <View style={styles.up}>
              <Image
                style={styles.logo}
                source={require('../../images/logo.png')}
              />
              <Text style={styles.title}>Go English </Text>
            </View>

            <View style={styles.box_shadow}>
              <View style={styles.box_input}>
                <View style={styles.layout_input}>
                  <Text style={styles.intro}>Ứng dụng học Tiếng Anh</Text>
                  <Text style={styles.intro}>
                    {' '}
                    Học tiếng Anh mọi lúc, mọi nơi
                  </Text>
                  <View style={{marginTop: 7}}>
                    <Text style={{fontSize: 15}}>
                      Hãy đăng nhập ngay để bắt đầu học thôi!!!
                    </Text>
                  </View>

                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Nhập email hoặc username"
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
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Nhập mật khẩu"
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
                </View>
              </View>
            </View>
            {isLoading ? (
              <View
                style={{marginTop: 30, borderRadius: 5, marginHorizontal: 20}}>
                <ActivityIndicator size={28} color="#777777" />
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  style={
                    isValid == true
                      ? {...styles.loginButton, backgroundColor: '#F06060'}
                      : {...styles.loginButton}
                  }
                  onPress={handleSubmit}
                  disabled={!isValid}>
                  <Text style={styles.tittleButton}> Đăng nhập </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebookButton}>
                  <Text style={styles.tittleButton}>
                    {' '}
                    Đăng nhập với Facebook{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.facebookButton} />
            <View style={styles.signUp}>
              <Text style={{color: '#212529', fontSize: 16, marginLeft: 20}}>
                Bạn chưa có tài khoản?{' '}
              </Text>

              <Text
                style={styles.textSignUp}
                onPress={() => navigation.navigate('SignUp')}>
                Đăng ký nhanh
              </Text>
            </View>
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
    alignItems: 'stretch',
    backgroundColor: '#eac3b0',
    paddingBottom: 30,
  },
  up: {
    flex: 2.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_input: {
    flexDirection: 'column',
    justifyContent: 'flex-start', // Bắt đầu từ trên xuống dưới
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#CFD4DA',
    opacity: 0.5,
    fontSize: 14,
    color: 'red',
  },
  loginButton: {
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: '#7777',
    marginHorizontal: 20,
  },
  tittleButton: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  facebookButton: {
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#3b5998',
    marginHorizontal: 20,
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
  textSignUp: {
    // color: 'blue',
    fontSize: 16,
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  layout_input: {
    marginVertical: 20,
  },
  intro: {
    color: '#F06060',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  signUp: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
export default Login;
