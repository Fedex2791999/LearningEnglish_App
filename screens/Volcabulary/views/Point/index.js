import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Button,
    Image,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import ProgressBar from '../../components/ProgressBar';
import IconClose from '../../components/Icons/IconClose';

var widthScreen = 0.9 * Dimensions.get('window').width;

class Point extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1, flexDirection: 'row', marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                        <IconClose navigation={this.props.navigation}/>
                    </View>
                    <View style={{
                        flex: 9,
                        justifyContent: 'center'
                    }}>
                        <ProgressBar
                            color={'#40ff00'}
                            unfilledColor={'#d9d9d9'} //màu nền của progress
                            borderColor={'#ffffff'} //màu viền biên ngoài
                            borderRadius={10}
                            height={18}
                            width={widthScreen * 0.9}
                            progress={1}
                        />
                    </View>
                </View>

                <View style={{ flex: 1 }}>

                </View>

                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                    <View style={{ flex: 1, }}>
                        <Text style={{ fontSize: 22 , fontWeight:'bold' }}>Cố gắng hơn vào lần sau nhé!!!</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>Bạn nhận được 100 điểm</Text>
                    </View>
                </View>

                <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: 280, height: 280 }}
                        source={{ uri: 'https://imgur.com/eyF2qZY.png' }}
                    />
                </View>

                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ borderRadius: 18, height: 60, width: 0.6 * widthScreen, backgroundColor: '#40ff00', justifyContent: 'center', alignItems: 'center' }}
                        onPress={()=>this.props.navigation.navigate('Main')}
                    >
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>TIẾP TỤC</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default Point;
