import React, { Component } from 'react';
import { ScrollView, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';

var heightScreen = Dimensions.get('window').height;
var widthScreen = Dimensions.get('window').width;

export default class Exercise extends Component {

    render() {
        const { text, uri, backgroundColor, navigation, nameScreen} = this.props
        return (
            <View style={{
                height: heightScreen / 3,
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
            }}>
                <TouchableOpacity style={{ flex: 2, justifyContent: 'flex-end' }} onPress={() => navigation.navigate(nameScreen)}>
                    <View style={{ width: 120, height: 120, borderRadius: 60, borderWidth: 8, borderColor: '#d9d9d9', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: backgroundColor, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ width: 65, height: 65 }}
                                source={{ uri: uri }}
                            />
                        </View>

                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        {text}
                    </Text>
                </View>
            </View>
        );
    }
}
