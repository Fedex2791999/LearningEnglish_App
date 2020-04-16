import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class ItemSentence extends Component {
  render() {
    const {text, size, id, action} = this.props;
    return (
      <View
      style={{
        paddingHorizontal: 10, flexDirection: 'column',
        marginHorizontal: 10, marginVertical: 10, height: 50, borderRadius: 10, borderWidth: 2,
        borderColor: '#999999', justifyContent: 'center', alignItems: 'stretch',
        backgroundColor: '#d9d9d9',
      }}>
      <TouchableOpacity type="primary" style={{ alignItems: 'stretch' }} onPress={action}>
        <Text style={{ fontSize: 20 }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
    );
  }
}

export default ItemSentence;
