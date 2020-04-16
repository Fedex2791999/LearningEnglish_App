import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
var widthScreen = 0.9 * Dimensions.get('window').width;

class CheckButton extends Component {
    constructor(props) {
        super(props)
    }

    functionOne = (numberScreen, checkItem) => {
        if (numberScreen === '1') {
            if (checkItem === 1) {
                Alert.alert(
                    numberScreen,
                    'Đáp án chính xác',
                    [
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('NewWord2') },
                    ],
                    { cancelable: false }
                )
            }
            else {
                Alert.alert(
                    numberScreen,
                    'Đáp án không chính xác',
                    [
                        { text: 'Chọn lại', onPress: () => this.props.navigation.navigate('NewWord'), style: 'cancel' },
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('NewWord2') },
                    ],
                    { cancelable: false }
                )
            }
        }
        else if (numberScreen === '3') {
            if (checkItem === 1) {
                Alert.alert(
                    numberScreen,
                    'Đáp án chính xác',
                    [
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('Listen') },
                    ],
                    { cancelable: false }
                )
            }
            else {
                Alert.alert(
                    numberScreen,
                    'Đáp án không chính xác',
                    [
                        { text: 'Chọn lại', onPress: () => this.props.navigation.navigate('Listen2'), style: 'cancel' },
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('Listen') },
                    ],
                    { cancelable: false }
                )
            }
        }
        else if (numberScreen === '4') {
            if (checkItem === 1) {
                Alert.alert(
                    '1',
                    'Đáp án chính xác',
                    [
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('Sentence2') },
                    ],
                    { cancelable: false }
                )
            }
            else {
                Alert.alert(
                    '1',
                    'Đáp án không chính xác',
                    [
                        { text: 'Chọn lại', onPress: () => this.props.navigation.navigate('Sentence'), style: 'cancel' },
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('Sentence2') },
                    ],
                    { cancelable: false }
                )
            }
        }
        else {
            if (checkItem === 2) {
                Alert.alert(
                    numberScreen,
                    'Đáp án chính xác',
                    [
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('Point') },
                    ],
                    { cancelable: false }
                )
            }
            else {
                Alert.alert(
                    numberScreen,
                    'Đáp án không chính xác',
                    [
                        { text: 'Chọn lại', onPress: () => this.props.navigation.navigate('NewWord2'), style: 'cancel' },
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('Point') },
                    ],
                    { cancelable: false }
                )
            }
        }
    }
    functionTwo = () => {

    }
    render() {
        const { check, checkItem, numberScreen } = this.props;

        return (
            <View>
                <TouchableOpacity
                    style={[
                        styles.container,
                        check ? styles.changeBackgroundColorGray : styles.changeBackgroundColorGreen
                    ]}
                    onPress={() => this.functionOne(numberScreen, checkItem)}
                >
                    <Text style={styles.text}>KIỂM TRA</Text>
                </TouchableOpacity>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        height: 40,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "center",
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
    }
})
export default CheckButton;
