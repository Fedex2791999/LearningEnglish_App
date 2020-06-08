import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';

const widthScreen = 0.9 * Dimensions.get('window').width;

const CheckSentence = props => {
  const functionTwo = (correctSentence, answer, numberScreen) => {
    if (numberScreen == 2) {
      if (JSON.stringify(correctSentence) === JSON.stringify(answer)) {
        Alert.alert(
          '2',
          'Đáp án chính xác',
          [
            {
              text: 'Tiếp tục',
              onPress: () => props.navigation.navigate('Point'),
            },
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          '2',
          'Đáp án không chính xác',
          [
            {
              text: 'Chọn lại',
              onPress: () => props.navigation.navigate('Sentence2'),
            },
            {
              text: 'Tiếp tục',
              onPress: () => props.navigation.navigate('Point'),
            },
          ],
          {cancelable: false},
        );
      }
    }
  };
  const {checkFocus, correctSentence, answer, numberScreen} = props;

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          checkFocus
            ? styles.changeBackgroundColorGray
            : styles.changeBackgroundColorGreen,
        ]}
        onPress={() => functionTwo(correctSentence, answer, numberScreen)}>
        <Text style={styles.text}>KIỂM TRA</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
});
export default CheckSentence;
