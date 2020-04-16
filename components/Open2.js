/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import flatList from '../data/flatList';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

class FlatListItem extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View style={styles.items}>
          <Image style={styles.logo} source={{uri: this.props.item.img}} />
          <Text style={styles.text}>{this.props.item.key}</Text>
        </View>
      </View>
    );
  }
}

export default class Open2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Chọn chủ đề mà bạn thích</Text>
        </View>
        {/* header */}
        <View style={styles.line} />
        <View style={styles.body}>
          <View style={styles.list}>
            <FlatList
              data={flatList}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.content}
                    onPress={() => this.props.navigation.navigate('Open3')}>
                    <FlatListItem item={item} index={index} />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        {/* body */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
  },
  body: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'flex-start', // Bắt đầu từ trên xuống dưới
    alignItems: 'center',
  },

  line: {
    height: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  list: {
    marginTop: 30,
  },
  text: {
    fontSize: 22,
    marginLeft: 10,
    alignItems: 'center',
  },
  items: {
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 3,
    borderColor: 'red',
    padding: 10,
    marginTop: 15,
    flexDirection: 'row',
    height: 70,
    width: 300,
  },
  title: {
    width: 320,
    height: 45,
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 56,
    width: 56,
  },
});
