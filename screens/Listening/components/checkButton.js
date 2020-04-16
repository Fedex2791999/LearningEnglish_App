import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';

var widthScreen = 0.9 * Dimensions.get('window').width;

class CheckButton extends Component {

  constructor(props) {
    super(props);
  }

  handle = (correctSentence, answer) => {
    if (correctSentence === answer) {
      Alert.alert(
        answer,
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
        answer,
        'Đáp án không chính xác',
        [
          {
            text: 'Chọn lại',
            onPress: () => this.props.navigation.navigate('Listen'),
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
  };

  render() {
    const {check, correctSentence, answer} = this.props;

    var word = answer.join(' ');

    return (
      <View>
        <TouchableOpacity
          style={[
            styles.container,
            check
              ? styles.changeBackgroundColorGray
              : styles.changeBackgroundColorGreen,
          ]}
          onPress={() => this.handle(correctSentence, word)}>
          <Text style={styles.text}>KIỂM TRA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
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
export default CheckButton;
