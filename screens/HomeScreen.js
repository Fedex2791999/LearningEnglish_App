import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import HomeScreens from './HomeScreens/views/HomeScreen';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{flex: 1}}>
           <HomeScreens navigation={this.props.navigation}/>
        </View>
    );
}
}

export default HomeScreen;