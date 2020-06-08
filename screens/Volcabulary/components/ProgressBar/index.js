import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({
  color,
  unfilledColor,
  borderColor,
  borderRadius,
  height,
  width,
  progress,
}) => {
  return (
    <View>
      <Progress.Bar
        color={color}
        unfilledColor={unfilledColor} //màu nền của progress
        borderColor={borderColor} //màu viền biên ngoài
        borderRadius={borderRadius}
        height={height}
        width={width}
        progress={progress}
      />
    </View>
  );
};

export default ProgressBar;
