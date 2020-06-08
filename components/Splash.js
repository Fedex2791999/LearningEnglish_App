import React from 'react';
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
  TextInput,
  Animated,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Splash = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
      <Text style={styles.title}>Ứng dụng học tiếng Anh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(234,195,176)',
  },
  logo: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    width: 280,
    height: 45,
    fontSize: 21,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
