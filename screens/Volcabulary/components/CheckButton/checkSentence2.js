import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Alert,
} from 'react-native';

var widthScreen = 0.9 * Dimensions.get('window').width;

class CheckSentence extends Component {
    constructor(props) {
        super(props)

    }

    functionTwo = (correctSentence, answer, numberScreen) => {
        if (numberScreen == 2) {
            if (JSON.stringify(correctSentence) === JSON.stringify(answer)) {
                Alert.alert(
                    '2',
                    'Đáp án chính xác',
                    [
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('Point') },
                    ],
                    { cancelable: false }
                );
            }
            else {
                Alert.alert(
                    '2',
                    'Đáp án không chính xác',
                    [
                        { text: 'Chọn lại', onPress: () => this.props.navigation.navigate('Sentence2') },
                        { text: 'Tiếp tục', onPress: () => this.props.navigation.navigate('Point') },
                    ],
                    { cancelable: false }
                );
            }
        }

    }
    render() {
        const { checkFocus, correctSentence, answer, numberScreen, } = this.props;

        return (
            <View>
                <TouchableOpacity
                    style={[
                        styles.container,
                        checkFocus ? styles.changeBackgroundColorGray : styles.changeBackgroundColorGreen
                    ]}
                    onPress={() => this.functionTwo(correctSentence, answer, numberScreen)}
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
export default CheckSentence;
