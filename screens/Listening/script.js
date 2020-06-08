import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import IconBack from './components/IconBack';
import Pdf from 'react-native-pdf';

 const Script = (props) =>  {
    const source = require('./pdf/hoithoaitienganh.pdf');
    return (
      <View style={styles.container}>
        <View style={{flext: 2, height: 50, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'blue',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <IconBack navigation={props.navigation} screen="PlayList"/>
            </View>
            <Text
              style={{
                flex: 5,
                fontSize: 28,
                fontWeight: 'bold',
                color: 'white',
              }}>
              SCRIPT
            </Text>
          </View>
        </View>
        <Pdf source={source} style={styles.pdf} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 8,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});


export default Script;