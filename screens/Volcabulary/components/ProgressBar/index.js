import React, { Component } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native';
import * as Progress from 'react-native-progress';

class ProgressBar extends Component {
    render() {
        const { color, unfilledColor, borderColor, borderRadius, height, width, progress } = this.props;
        return (
            <View>
                <Progress.Bar
                    color = {color}
                    unfilledColor={unfilledColor} //màu nền của progress
                    borderColor={borderColor} //màu viền biên ngoài
                    borderRadius={borderRadius}
                    height={height}
                    width={width}
                    progress={progress}
                />
            </View>
        )
    }
}

export default ProgressBar;
