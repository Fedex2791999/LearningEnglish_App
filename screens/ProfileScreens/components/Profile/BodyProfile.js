import React, { Component } from 'react';

import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var widthScreen = Dimensions.get('window').width;
class BodyProfile extends Component {
    render() {
        const { url, titletext, bodytext, navigation, nameScreen } = this.props;
        return (
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                    flex: 1,
                }}
                onPress={() => navigation.navigate(nameScreen)}
            >
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={url}
                    />
                </View>
                <View style={{
                    flex: 5,
                    flexDirection: 'column'
                }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", }}>
                        {titletext}
                    </Text>
                    <Text style={{ fontSize: 18, color: '#a6a6a6' }}>
                        {bodytext}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default BodyProfile;
