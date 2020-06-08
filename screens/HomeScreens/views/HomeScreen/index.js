import React from 'react';
import {ScrollView, Image, Text, View, StatusBar, Button} from 'react-native';
import Exercise from '../../components/Exercise/Practice';
import Level from '../../components/Exercise/Level';

const HomeScreen = props => {
  return (
    <View>
      <ScrollView>
        <View>
          <Level uri={'https://imgur.com/fRBEopr.png'} />
        </View>
        <View>
          <Exercise
            text="Từ vựng 1"
            uri={'https://imgur.com/5VhV1RM.png'}
            backgroundColor="#66ff1a"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Exercise
            text="Viết 1"
            uri={'https://imgur.com/tMzBSO7.png'}
            backgroundColor="#66ff1a"
            navigation={props.navigation}
            nameScreen="Sentence"
          />
          <Exercise
            text="Nghe 1"
            uri={'https://imgur.com/tFrM33U.png'}
            backgroundColor="#66ff1a"
            navigation={props.navigation}
            nameScreen="Listen2"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Exercise
            text="Từ vựng 2"
            uri={'https://imgur.com/AtVaoWW.png'}
            backgroundColor="#66ff1a"
            navigation={props.navigation}
            nameScreen="NewWord3"
          />
          <Exercise
            text="Viết 2"
            uri={'https://imgur.com/5q1tHlL.png'}
            backgroundColor="#66ff1a"
            navigation={props.navigation}
            nameScreen="Sentence3"
          />
        </View>
        <View>
          <Exercise
            text="Nghe 2"
            uri={'https://imgur.com/FaGyX9d.png'}
            backgroundColor="#66ff1a"
            navigation={props.navigation}
            nameScreen="Listen3"
          />
        </View>
        {/* Level2 */}
        <View>
          <Level uri={'https://imgur.com/9ik3Kjn.png'} />
        </View>
        <View>
          <Exercise
            text="Danh từ"
            uri={'https://imgur.com/5VhV1RM.png'}
            backgroundColor="#00ffff"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Exercise
            text="Liên từ"
            uri={'https://imgur.com/tMzBSO7.png'}
            backgroundColor="#00ffff"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
          <Exercise
            text="Phó từ"
            uri={'https://imgur.com/tFrM33U.png'}
            backgroundColor="#00ffff"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Exercise
            text="Số nhiều "
            uri={'https://imgur.com/AtVaoWW.png'}
            backgroundColor="#00ffff"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
          <Exercise
            text="Món ăn"
            uri={'https://imgur.com/5q1tHlL.png'}
            backgroundColor="#00ffff"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
        </View>
        <View>
          <Exercise
            text="Động vật"
            uri={'https://imgur.com/FaGyX9d.png'}
            backgroundColor="#00ffff"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
        </View>
        {/* Level3 */}
        <View>
          <Level uri={'https://imgur.com/lHRK0J8.png'} />
        </View>
        <View>
          <Exercise
            text="Danh từ"
            uri={'https://imgur.com/5VhV1RM.png'}
            backgroundColor="#ff1a1a"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Exercise
            text="Liên từ"
            uri={'https://imgur.com/tMzBSO7.png'}
            backgroundColor="#ff1a1a"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
          <Exercise
            text="Phó từ"
            uri={'https://imgur.com/tFrM33U.png'}
            backgroundColor="#ff1a1a"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Exercise
            text="Số nhiều "
            uri={'https://imgur.com/AtVaoWW.png'}
            backgroundColor="#ff1a1a"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
          <Exercise
            text="Món ăn"
            uri={'https://imgur.com/5q1tHlL.png'}
            backgroundColor="#ff1a1a"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
        </View>
        <View>
          <Exercise
            text="Động vật"
            uri={'https://imgur.com/FaGyX9d.png'}
            backgroundColor="#ff1a1a"
            navigation={props.navigation}
            nameScreen="NewWord"
          />
        </View>
        {/* listening */}
        <View>
          <Level
            uri={
              'https://cdn5.vectorstock.com/i/1000x1000/97/14/listening-music-icon-flat-style-vector-13349714.jpg'
            }
          />
        </View>
        <View>
          <Exercise
            text="Bài nghe tổng hợp"
            uri={'https://imgur.com/FaGyX9d.png'}
            backgroundColor="#ff1a1a"
            navigation={props.navigation}
            nameScreen="PlayList"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
