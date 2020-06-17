import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const StoreScreen = () => {
  const [INPUT, setInput] = useState('');
  const [OUTPUT, setOutput] = useState('');
  const [dictionary] = useState([
    {English: 'I have an apple', VietNamese: 'Tôi có một trái táo'},
    {English: 'I have a pen', VietNamese: 'Tôi có một cái bút'},
    {English: 'I have an orange ', VietNamese: 'Tôi có một quả cam'},
    {English: 'I have a bread', VietNamese: 'Tôi có một cái bánh mì '},
    {English: 'I have a book', VietNamese: 'Tôi có một quyển sách'},
    {English: 'I have a card', VietNamese: 'Tôi có một cái thẻ'},
    {English: 'I have a shirt', VietNamese: 'Toi co mot cai ao'},
    {English: 'Apple', VietNamese: 'trái táo'},
    {English: 'Hi My name is Huy', VietNamese: 'Xin chào tôi tên là Huy'}
  ]);

  const TranslateToVietNamese = () => {
    let count = 0;
    for (let i = 0; i < dictionary.length; i++) {
      if (INPUT == dictionary[i].English) {
        setOutput(dictionary[i].VietNamese);
        count++;
      }
      if (count == 0) {
        setOutput('');
      }
    }
  };
  const TranslateToEnglish = () => {
    let count = 0;
    for (let i = 0; i < dictionary.length; i++) {
      if (INPUT == dictionary[i].VietNamese) {
        setOutput(dictionary[i].English);
        count++;
      }
      if (count == 0) {
        setOutput('');
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <Image
            style={{width: 85, height: 85}}
            source={{uri: 'https://i.ibb.co/Jrm1RJ2/test3.png'}}
          />
          <Text style={styles.header}>Translate</Text>
        </View>
        <View style={{marginTop: 40}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TextInput
              placeholder="Nhập từ cần tra"
              onChangeText={INPUT => setInput(INPUT)}
              value={INPUT}
              style={styles.In}
              keyboardType="default"
              multiline = {true}
              numberOfLines = {5}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => TranslateToVietNamese()}
              style={{...styles.button, marginRight: 15}}>
              <Text style={{color: 'white'}}>Eng - Viet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => TranslateToEnglish()}
              style={{...styles.button, marginLeft: 15}}>
              <Text style={{color: 'white'}}>Viet - Eng</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={styles.Out}
              editable={false}
              // maxLength={200}
              multiline={true}
              numberOfLines={5}>
              {OUTPUT}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  In: {
    borderWidth: 1,
    borderColor: '#385999',
    width: 300,
    borderRadius: 7,
    margin: 15,
    fontSize: 15,
    backgroundColor: '#dedede',
  },
  Out: {
    height: 110,
    borderWidth: 1,
    borderColor: '#385999',
    width: 300,
    borderRadius: 7,
    margin: 15,
    marginBottom: 30,
    padding: 7,
    fontSize: 15,
    backgroundColor: '#dedede',
  },
  button: {
    backgroundColor: 'rgb(63, 106, 150)',
    paddingVertical: 5,
    borderRadius: 7,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 40,
    color: 'rgb(63, 106, 150)',
    fontWeight: 'bold',
    marginTop: 20,
  },
});
export default StoreScreen;
