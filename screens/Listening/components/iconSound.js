import React, {Component} from 'react';
import {Alert, Image, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';

function playSound(url) {
  Sound.setCategory('Playback');

  var Audio = new Sound(url, error => {
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
}

class IconSound extends Component {
  render() {
    const {styles, img, urlSound} = this.props;
    return (
      <TouchableOpacity onPress={()=> {return playSound(urlSound)}}>
        <Image style={styles} source={img} />
      </TouchableOpacity>
    );
  }
}

export default IconSound;
