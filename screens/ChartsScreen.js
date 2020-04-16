import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import Rank from './Rank';
//import { ScrollView } from 'react-native-gesture-handler';

class ChartsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_uri: "https://cdn.pose.com.vn/assets/2019/03/14/rv.bae_.irene_49539738_2007696232861865_4554756812831883696_n.jpg",
      date: ' '
    }
  }

  componentDidMount() {
    var that = this;
    var day = new Date();
    that.setState({
      date: day.toLocaleTimeString()
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Rank />
        <Text style={styles.title}>Giải đấu Bac</Text>
        <View style={styles.desBox}>
          <Text style={styles.description}>Top 15 được thăng lên giải đấu cao hơn</Text>
        </View>
        <View style={styles.timeBox}>
          <Text style={{fontSize: 18, textAlign: 'center', color: 'orange'}}>{this.state.date}</Text>
        </View>
        <ScrollView>
          <FlatList
            data={[
              { index: 1, name: 'Devin', point: 17 },
              { index: 2, name: 'Dan', point: 22 },
            ]}
            renderItem={({ item }) => (
              <ListItem
                title={item.name}
                titleStyle={{ fontWeight: 'bold' }}
                leftAvatar={{ source: { uri: this.state.image_uri } }}
                leftElement={<Text style={styles.indexItem}>{item.index}</Text>}
                rightElement={<Text>{item.point}</Text>}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
          />
          <Text style={styles.upRank}>NHÓM THĂNG HẠNG</Text>
          <FlatList
            data={[
              { index: 3, name: 'Devin', point: 17 },
              { index: 4, name: 'Dan', point: 22 },
            ]}
            renderItem={({ item }) => (
              <ListItem
                title={item.name}
                titleStyle={{ fontWeight: 'bold' }}
                leftAvatar={{ source: { uri: this.state.image_uri } }}
                leftElement={<Text style={styles.indexItem}>{item.index}</Text>}
                rightElement={<Text>{item.point}</Text>}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
          />
          <Text style={styles.downRank}>NHÓM XUỐNG HẠNG</Text>
          <FlatList
            data={[
              { index: 5, name: 'Devin', point: 17 },
              { index: 6, name: 'Dan', point: 22 },
            ]}
            renderItem={({ item }) => (
              <ListItem
                title={item.name}
                titleStyle={{ fontWeight: 'bold' }}
                leftAvatar={{ source: { uri: this.state.image_uri } }}
                leftElement={<Text style={styles.indexItem}>{item.index}</Text>}
                rightElement={<Text>{item.point}</Text>}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

class Item extends Component {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  indexItemUpRank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green'
  },
  indexItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  indexItemDownRank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  },
  upRank: {
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold'
  },
  downRank: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold'
  },
  timeBox: {
    paddingBottom: 16,
    paddingTop: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#dcdcdc',
  },
  desBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  description: {
    textAlign: "center",
    width: 220,
  },
  time: {
    textAlign: "center",
  },
});

export default ChartsScreen;