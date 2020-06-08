import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemSentence = ({text, size, id, action}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        type="primary"
        style={{alignItems: 'stretch'}}
        onPress={action}>
        <Text style={{fontSize: 20}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 10,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#999999',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#d9d9d9',
  },
});
export default ItemSentence;
