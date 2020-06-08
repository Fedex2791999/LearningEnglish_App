import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const Open1 = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chọn một hướng đi</Text>
      </View>
      {/* header */}
      <View style={styles.line} />

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.content}
          onPress={() => props.navigation.navigate('Open2')}>
          <View style={styles.top}>
            <Image style={styles.logo} source={require('../images/logo.png')} />
          </View>
          <View style={styles.bot}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                textDecorationLine: 'underline',
              }}>
              Bạn đã biết tiếng Anh một chút ?
            </Text>
            <Text style={{fontSize: 19}}>Bạn đã biết tiếng Anh một chút</Text>
          </View>
        </TouchableOpacity>
        {/* content */}

        <TouchableOpacity style={styles.content}>
          <View style={styles.top}>
            <Image style={styles.logo} source={require('../images/logo.png')} />
          </View>
          <View style={styles.bot}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                textDecorationLine: 'underline',
              }}>
              Bạn đã biết tiếng Anh một chút ?
            </Text>
            <Text style={{fontSize: 19}}>Bạn đã biết tiếng Anh một chút</Text>
          </View>
        </TouchableOpacity>
        {/* content */}
      </View>
      {/* body */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
  },
  body: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'flex-start', // Bắt đầu từ trên xuống dưới
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 280,
    height: 45,
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
    width: 300,
    height: 150,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: 'red',
    padding: 5,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  top: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
  },
  bot: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start', // Bắt đầu từ trên xuống dưới
    alignItems: 'center',
  },
});
export default Open1;
