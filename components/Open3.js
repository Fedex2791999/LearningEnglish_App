import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {openList} from '../data/openList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
const OpenListItem = (props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.items}>
        <Text style={styles.text1}>{props.item.key}</Text>
        <Text style={styles.text2}>{props.item.time}</Text>
      </View>
    </View>
  );
};

export default function Open3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chọn một hướng đi</Text>
      </View>
      {/* header */}
      <View style={styles.line} />
      <View style={styles.body}>
        <View style={styles.list}>
          <FlatList
            data={openList}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={props.navigation.navigate('Main')}>
                  <OpenListItem item={item} index={index} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 22,
              width: 200,
            }}>
            Bạn có thể thay đổi mục tiêu sau
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={props.navigation.navigate('Main')}>
        <View style={styles.button}>
          <Text style={styles.tittleButton}> TIẾP TỤC </Text>
        </View>
        {/* body */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#8af38e',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
  },
  body: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start', // Bắt đầu từ trên xuống dưới
    alignItems: 'center',
  },
  button: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
  },

  line: {
    height: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  list: {
    flex: 9,
    marginTop: 30,
  },
  text1: {
    flex: 4,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
  text2: {
    flex: 6,
    fontSize: 20,
    textAlign: 'right',
    justifyContent: 'flex-end',
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
  loginButton: {
    marginTop: 30,
    width: 300,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  tittleButton: {
    color: 'white',
    fontSize: 20,
  },
});
