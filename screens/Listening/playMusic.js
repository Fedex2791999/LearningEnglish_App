import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import Sound from 'react-native-sound';
import IconBack from './components/IconBack';

const img_speaker = require('./resources/ui_speaker.png');
const img_pause = require('./resources/ui_pause.png');
const img_play = require('./resources/ui_play.png');

export default class PlayMusic extends Component {
  constructor() {
    super();
    this.state = {
      playState: 'paused', //playing, paused
      playSeconds: 0,
      duration: 120,
    };
  }

  componentDidMount() {
    this.play();
  }

  componentWillUnmount() {
    if (this.sound) {
      this.sound.release();
      this.sound = null;
    }
  }

  play = async () => {
    if (this.sound) {
      this.sound.play(this.playComplete);
      this.setState({playState: 'playing'});
    } else {
      const filepath = this.props.navigation.state.params.filepath;
      console.log('[Play]', filepath);

      this.sound = new Sound(filepath, error => {
        if (error) {
          console.log('failed to load the sound', error);
          Alert.alert('Notice', 'audio file error. (Error code : 1)');
          this.setState({playState: 'paused'});
        } else {
          var time = this.sound.getDuration();
          console.log(time);
          this.setState({
            playState: 'playing',
            duration: time,
          });
          this.sound.play(this.playComplete);
        }
      });
    }
  };

  playComplete = success => {
    if (this.sound) {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        Alert.alert('Notice', 'audio file error. (Error code : 2)');
      }
      this.setState({playState: 'paused', playSeconds: 0});
      this.sound.setCurrentTime(0);
    }
  };

  pause = () => {
    if (this.sound) {
      this.sound.pause();
    }

    this.setState({playState: 'paused'});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flext: 1, height: 50, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'blue',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <IconBack navigation={this.props.navigation} screen="PlayList" />
            </View>
            <Text
              style={{
                flex: 5,
                fontSize: 28,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Listening
            </Text>
          </View>
        </View>
        <View style={{flex: 6, justifyContent: 'center'}}>
          <Image source={img_speaker} style={styles.img} />
          <View style={styles.control}>
            {this.state.playState == 'playing' && (
              <TouchableOpacity
                onPress={this.pause}
                style={{marginHorizontal: 20}}>
                <Image source={img_pause} style={styles.imgicon} />
              </TouchableOpacity>
            )}
            {this.state.playState == 'paused' && (
              <TouchableOpacity
                onPress={this.play}
                style={{marginHorizontal: 20}}>
                <Image source={img_play} style={styles.imgicon} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 15,
    alignSelf: 'center',
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  imgicon: {
    width: 30,
    height: 30,
  },
});
