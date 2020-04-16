import React, {Component} from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback,Keyboard } from 'react-native';
// You can import from local files
// or any pure javascript modules available in npm

class StoreScreen extends Component {
  // static navigationOptions = {
  //   title: "dịch",
  //   headerStyle: {
  //     backgroundColor: '#385999',
  //   },
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  //   headerTintColor: '#fff',
  // };
  constructor(props) {
    super(props);
    this.state = {
      INPUT: '',
      OUTPUT: '',
      dictionary: [
        { English: "I have an apple", VietNamese: "Tôi có một trái táo" },
        { English: "I have a pen", VietNamese: "Tôi có một cái bút" },
        { English: "I have an orange ", VietNamese: "Tôi có một quả cam" },
        { English: "I have a bread", VietNamese: "Tôi có một cái bánh mì " },
        { English: "I have a book", VietNamese: "Tôi có một quyển sách" },
        { English: "I have a card", VietNamese: "Tôi có một cái thẻ" },
        { English: "I have a shirt", VietNamese: "Toi co mot cai ao" },
        { English: "Apple", VietNamese: "trái táo" },
      ]
    };

  }
  TranslateToVietNamese() {
    var count = 0;
    for (let i = 0; i < this.state.dictionary.length; i++) {
      if (this.state.INPUT == this.state.dictionary[i].English){
        this.setState({ OUTPUT: this.state.dictionary[i].VietNamese })
        count++;
      }
      if(count == 0){
        this.setState({ OUTPUT: '' })
      }
  }
}
  TranslateToEnglish() {
    var count = 0;
    for (let i = 0; i < this.state.dictionary.length; i++) {
      if (this.state.INPUT == this.state.dictionary[i].VietNamese){
        this.setState({ OUTPUT: this.state.dictionary[i].English })
        count++;
    }
      if(count == 0){
        this.setState({ OUTPUT: '' })
      }
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>Translate</Text>
        <TextInput
          placeholder="Nhập từ cần tra"
          onChangeText={(INPUT) => this.setState({ INPUT })}
          value={this.state.INPUT}
          style={styles.In}
          keyboardType='default'
        
        />

        <TouchableOpacity
          onPress={() => this.TranslateToVietNamese()}
          style={styles.buttonVietNam} >
          <Text style={{ color: 'white' }}>
            Eng to Vie
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.TranslateToEnglish()}
          style={styles.buttonEnglish} >
          <Text style={{ color: 'white' }}>
            Vie to Eng
            </Text>
        </TouchableOpacity>


        <Text
          style={styles.Out}
          editable={false}
          maxLength={200}
          multiline={true}
          numberOfLines={4}
        >
          {this.state.OUTPUT}
        </Text>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#385999',
    padding: 15,
    elevation: 4,
    shadowColor: '#000000',
    shadowRadius: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  In: {
    height: 100,
    borderWidth: 1,
    borderColor: '#385999',
    width: 300,
    borderRadius: 15,
    margin: 15,
    padding: 7,
    fontSize: 21,
  },
  Out: {
    height: 100,
    borderWidth: 1,
    borderColor: '#385999',
    width: 300,
    borderRadius: 15,
    margin: 15,
    marginBottom: 30,
    padding: 7,
    fontSize: 21,
  },
  buttonVietNam: {
    width: 300,
    alignItems: 'center',
    backgroundColor: '#385999',
    padding: 15,
    borderRadius: 7,
    margin: 19,
  },
  buttonEnglish: {
    width: 300,
    alignItems: 'center',
    backgroundColor: '#385999',
    padding: 15,
    borderRadius: 7,
    margin: 19,
  },
  header: {
    fontSize: 34,
    color: "blue",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    fontWeight: 'bold'
  },

});
export default StoreScreen;