import React from 'react';
import {flatList} from '../data/flatList';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const FlatListItem = props => {
  return (
    <View
      style={{
        flex: 1,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
      }}>
      <View style={styles.items}>
        <Image style={styles.logo} source={{uri: props.item.img}} />
        <Text style={styles.text}>{props.item.key}</Text>
      </View>
    </View>
  );
};

const Open2 = ({navigation}) => {
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
                  onPress={() => navigation.navigate('Open3')}>
                  <FlatListItem item={item} index={index} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

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
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  body: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  list: {
    marginTop: 10,
  },
  text: {
    fontSize: 22,
    marginLeft: 35,
    alignItems: 'center',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    height: 70,
    width: 300,
    borderRadius: 6,
    borderWidth: 1,
    // borderColor: '#b1b1b1',
    overflow: 'hidden',
    elevation: 12,
    backgroundColor: '#ffff',
  },
  title: {
    height: 45,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
  },
  logo: {
    height: 56,
    width: 56,
  },
});
export default Open2;
