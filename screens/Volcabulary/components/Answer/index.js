import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';


class Answer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { url, text, isActive } = this.props;
        return (
            <View
                style={[
                    styles.touchableOpacity,
                    isActive ? styles.borderColorGreen : styles.borderColorGray
                ]}
            >
                <Image
                    source={url}
                    style={styles.image}
                />
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    touchableOpacity: {
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 8,
        height: 150,
        width: 120,
    },
    borderColorGray: {
        borderColor: '#8c8c8c'
    },
    borderColorGreen: {
        borderColor: '#008000',
        backgroundColor: '#99ff66',
    },
    image: {
        width: 85,
        height: 85,
        marginTop: 10,
    },
    text: {
        color: '#008000',
        fontSize: 16,
        fontWeight: "bold",
    }
})
export default Answer;
