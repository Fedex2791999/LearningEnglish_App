import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const Header = ({ children, style }) => (
  <Text style={[styles.header, style]}>{children}</Text>
);

const ButtonTitle = ({ children, onPress }) => (
  <TouchableOpacity style={styles.buttonTitle} onPress={onPress}>
    <Image style={styles.icon} source={require('./resources/music_icon.png')} />
    <Header>{children}</Header>
  </TouchableOpacity>
);

const icon = {
  image1: require('./resources/star1.png'),
  image2: require('./resources/star2.png'),
};

const ButtonMark = ({ path, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={path} style={styles.buttonMark} />
  </TouchableOpacity>
);

const Feature = ({ title, onPress1, remember, onPress2 }) => (
  <View style={styles.feature}>
    <ButtonTitle onPress={onPress1}>{title}</ButtonTitle>
    {remember ? (
      <ButtonMark path={icon.image2} onPress={onPress2} />
    ) : (
        <ButtonMark path={icon.image1} onPress={onPress2} />
      )}
  </View>
);

function addFavourit(component) {
  component.setState({
    remember: !component.state.remember,
  });
}

export default class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remember: false,
    };
  }

  render() {
    return (
      <Feature
        title={this.props.title}
        onPress1={this.props.handle}
        onPress2={() => {
          return addFavourit(this);
        }}
        remember={this.state.remember}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    padding: 7,
  },
  header: {
    padding: 7,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  icon: {
    width: 40,
    height: 40,
  },
  buttonTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonMark: {
    margin: 5,
    width: 30,
    height: 30,
  },
  feature: {
    padding: 5,
    height: 50,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
});
