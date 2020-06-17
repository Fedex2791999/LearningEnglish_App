import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {List, ListItem, SearchBar, Avatar} from 'react-native-elements';
import Rank from '../../components/Rank';
import ItemRank from '../../components/ItemRank';
import {listRank} from '../../constrants/default';
const ChartsScreen = () => {
  return (
    <View style={styles.container}>
      <Rank />
      <Text style={styles.title}>Bảng Xếp Hạng</Text>
      <View style={styles.desBox}>
        <Text style={styles.description}>
          Top 5 được thăng lên giải đấu cao hơn
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.listRank}>
        {listRank.map((data, index) => (
          <ItemRank data={data} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#eac3b0',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  desBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  description: {
    textAlign: 'center',
    width: 220,
  },
  listRank: {
    marginVertical: 20,
    borderRadius: 20,
    // backgroundColor: '#fff',
    paddingRight: 10,
    marginHorizontal: 8,
  },
});

export default ChartsScreen;
