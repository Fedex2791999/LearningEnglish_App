import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

import ProgressBar from '../../../components/ProgressBar';
import Question from '../../../components/Question';
import CheckButton from '../../../components/CheckButton/index';
import Answer from '../../../components/Answer/index';
import IconClose from '../../../components/Icons/IconClose';

const widthScreen = 0.9 * Dimensions.get('window').width;

const Listen2 = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [process, setProcess] = useState(0);

  const updateProcess = () => {
    setActiveIndex(process + 0.1);
  };
  const changeActiveIndex_A = () => {
    setActiveIndex(1);
    console.log(activeIndex);
  };
  const changeActiveIndex_B = () => {
    setActiveIndex(2);
    console.log(activeIndex);
  };
  const changeActiveIndex_C = () => {
    setActiveIndex(3);
    console.log(activeIndex);
  };
  const changeActiveIndex_D = () => {
    setActiveIndex(4);
    console.log(activeIndex);
  };

  const log = () => {
    console.log('da nhan');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginLeft: 0.05 * widthScreen,
          marginRight: 0.05 * widthScreen,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <IconClose navigation={props.navigation} />
        </View>
        <View
          style={{
            flex: 9,
            justifyContent: 'center',
          }}>
          <ProgressBar
            color={'#40ff00'}
            unfilledColor={'#d9d9d9'} //màu nền của progress
            borderColor={'#ffffff'} //màu viền biên ngoài
            borderRadius={10}
            height={18}
            width={widthScreen * 0.9}
            progress={0}
          />
        </View>
      </View>

      <View
        style={{
          flex: 2,
          marginLeft: 0.05 * widthScreen,
          marginRight: 0.05 * widthScreen,
        }}>
        <Question
          titleQuestion="Chọn đáp án đúng: "
          bodyQuestion='Đâu là "quả dâu" ?'
        />
      </View>

      <View
        style={{
          flex: 6,
          flexDirection: 'column',
          marginLeft: 0.05 * widthScreen,
          marginRight: 0.05 * widthScreen,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center'}}
            onPress={changeActiveIndex_A}>
            <Answer
              url={require('../../../assets/images/strawberry-icon.png')}
              text="Strawberry"
              flag="1"
              isActive={activeIndex === 1}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center'}}
            onPress={changeActiveIndex_B}>
            <Answer
              url={require('../../../assets/images/orange.png')}
              text="Orange"
              flag="2"
              isActive={activeIndex === 2}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center'}}
            onPress={changeActiveIndex_C}>
            <Answer
              url={require('../../../assets/images/banana.png')}
              text="Banana"
              flag="3"
              isActive={activeIndex === 3}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center'}}
            onPress={changeActiveIndex_D}>
            <Answer
              url={require('../../../assets/images/apple.png')}
              text="Apple"
              flag="4"
              isActive={activeIndex === 4}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1}}>
        <CheckButton
          check={activeIndex === 0}
          checkItem={activeIndex}
          navigation={props.navigation}
          numberScreen="1"
        />
        {/* <CheckButton navigation={props.navigation}/> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default Listen2;
