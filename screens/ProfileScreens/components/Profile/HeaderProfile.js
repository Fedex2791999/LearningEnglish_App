import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

class HeaderProfile extends Component {
    render() {
        const { name, country, url } = this.props;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    flex: 2,
                    justifyContent: 'center'
                }} >
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={url}
                        style={{ width: 100, height: 100, borderRadius: 200 / 2}}
                    />
                </TouchableOpacity>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                    <View >
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                        }}>
                            {name}
                        </Text>
                    </View>
                    <View >
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16
                        }}>
                            {country}
                        </Text>
                    </View>

                </View>
            </View>
        )
    }
}

export default HeaderProfile;
