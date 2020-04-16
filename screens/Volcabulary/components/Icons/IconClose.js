import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


class IconClose extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Main")}>
                <Image
                    style={{height: 30, width: 30}}
                    source={{uri: 'https://imgur.com/YmEWh2n.png'}}
                />
            </TouchableOpacity>
        )
    }
}

export default IconClose;
