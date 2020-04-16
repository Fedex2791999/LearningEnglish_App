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
        const {screen} = this.props;
        return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate(screen)}>
                <Image
                    style={{height: 30, width: 30}}
                    source={{uri: 'https://imgur.com/YmEWh2n.png'}}
                />
            </TouchableOpacity>
        )
    }
}

export default IconClose;
