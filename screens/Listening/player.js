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
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import IconBack from './components/IconBack';

const img_speaker = require('./resources/ui_speaker.png');
const img_pause = require('./resources/ui_pause.png');
const img_play = require('./resources/ui_play.png');
const img_playjumpleft = require('./resources/ui_playjumpleft.png');
const img_playjumpright = require('./resources/ui_playjumpright.png');

export default class Player extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('id'),
    };
  };

  constructor() {
    super();
    this.state = {
      playState: 'paused', //playing, paused
      playSeconds: 0,
      duration: 120,
    };
    this.sliderEditing = false;
  }

  componentDidMount() {
    this.play();

    this.timeout = setInterval(() => {
      if (
        this.sound &&
        this.sound.isLoaded() &&
        this.state.playState == 'playing' &&
        !this.sliderEditing
      ) {
        this.sound.getCurrentTime(seconds => {
          this.setState({playSeconds: seconds});
        });
      }
    }, 100);
  }
  componentWillUnmount() {
    if (this.sound) {
      this.sound.release();
      this.sound = null;
    }
    if (this.timeout) {
      clearInterval(this.timeout); //stop timeout
    }
  }

  onSliderEditStart = () => {
    this.sliderEditing = true;
  };
  onSliderEditEnd = () => {
    this.sliderEditing = false;
  };
  onSliderEditing = value => {
    if (this.sound) {
      this.sound.setCurrentTime(value);
      this.setState({playSeconds: value});
    }
  };

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

  getAudioTimeString(seconds) {
    const h = parseInt(seconds / (60 * 60));
    const m = parseInt((seconds % (60 * 60)) / 60);
    const s = parseInt(seconds % 60);

    return (
      (h < 10 ? '0' + h : h) +
      ':' +
      (m < 10 ? '0' + m : m) +
      ':' +
      (s < 10 ? '0' + s : s)
    );
  }

  jumpPrev15Seconds = () => {
    this.jumpSeconds(-15);
  };
  jumpNext15Seconds = () => {
    this.jumpSeconds(15);
  };

  jumpSeconds = secsDelta => {
    if (this.sound) {
      this.sound.getCurrentTime((secs, isPlaying) => {
        let nextSecs = secs + secsDelta;
        if (nextSecs < 0) nextSecs = 0;
        else if (nextSecs > this.state.duration) nextSecs = this.state.duration;
        this.sound.setCurrentTime(nextSecs);
        this.setState({playSeconds: nextSecs});
      });
    }
  };

  render() {
    const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
    const durationString = this.getAudioTimeString(this.state.duration);
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
        <View style={{flex:6, justifyContent: 'center',}}>
          <Image source={img_speaker} style={styles.img} />
          <View style={styles.control}>
            <TouchableOpacity
              onPress={this.jumpPrev15Seconds}
              style={{justifyContent: 'center'}}>
              <Image source={img_playjumpleft} style={styles.imgicon} />
              <Text style={styles.number}>15</Text>
            </TouchableOpacity>
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
            <TouchableOpacity
              onPress={this.jumpNext15Seconds}
              style={{justifyContent: 'center'}}>
              <Image source={img_playjumpright} style={styles.imgicon} />
              <Text style={styles.number}>15</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.control}>
            <Text style={{color: 'white', alignSelf: 'center'}}>
              {currentTimeString}
            </Text>
            <Slider
              onTouchStart={this.onSliderEditStart}
              //onTouchMove={() => console.log('onTouchMove')}
              onTouchEnd={this.onSliderEditEnd}
              //onTouchEndCapture={() => console.log('onTouchEndCapture')}
              // onTouchCancel={() => console.log('onTouchCancel')}
              onValueChange={this.onSliderEditing}
              value={this.state.playSeconds}
              maximumValue={this.state.duration}
              maximumTrackTintColor="gray"
              minimumTrackTintColor="white"
              thumbTintColor="white"
              style={{
                flex: 1,
                alignSelf: 'center',
                marginHorizontal: Platform.select({ios: 5}),
              }}
            />
            <Text style={{color: 'white', alignSelf: 'center'}}>
              {durationString}
            </Text>
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
  number: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 1,
    color: 'white',
    fontSize: 12,
  },
});
