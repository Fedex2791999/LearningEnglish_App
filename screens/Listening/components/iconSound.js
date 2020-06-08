import React from 'react';
import {Alert, Image, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';

const playSound = url => {
  Sound.setCategory('Playback');

  let Audio = new Sound(url, error => {
    if (error) {
      console.log('failed: ', error);
      return;
    }
    Audio.play(success => {
      if (success) {
        console.log('complete!');
        Audio.release();
      } else {
        console.log('play failed');
      }
    });
  });
};

const IconSound = ({styles, img, urlSound}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        return playSound(urlSound);
      }}>
      <Image style={styles} source={img} />
    </TouchableOpacity>
  );
};

export default IconSound;
