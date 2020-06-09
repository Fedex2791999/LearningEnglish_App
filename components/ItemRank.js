import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {avatarDefault} from '../constrants/default';

export default function ItemRank({data}) {
  return (
    <View style={{...styles.container,backgroundColor: data.bgr, borderRadius: 15}}>
      <View style={styles.boxLeft}>
        <Text style={styles.rank}>{data.rank}</Text>
        <Image
          style={styles.image}
          source={{uri: data.img  ? data.img : avatarDefault}}
        />
        <Text style={styles.name}>{data.name}</Text>
      </View>
      <View style={styles.boxRight}>
        <Text style={styles.numberPoint}>{data.point}</Text>
        <Text style={styles.point}>point</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 7,
    borderRadius: 20,
    marginTop: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#6c6647',
    marginLeft: 10,
    marginVertical: 5,
  },
  numberPoint: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#6c6647',
  },
  point: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#d1bb6d',
    paddingHorizontal: 3,
    paddingTop: 7,
  },
  boxRight: {
    marginVertical: 10,
    flexDirection: 'row',
    marginLeft: 14,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  rank: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#e9b88a',
    marginRight: 10,
  },
  boxLeft: {
    marginVertical: 7,
    flexDirection: 'row',
    marginLeft:5
  },
});
