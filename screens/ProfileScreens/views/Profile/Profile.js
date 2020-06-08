import React from 'react';

import {View, Text, Dimensions, ScrollView, Button} from 'react-native';
import HeaderProfile from '../../components/Profile/HeaderProfile';
import BodyProfile from '../../components/Profile/BodyProfile';

const  heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const  Profile  = (props) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: heightScreen / 3,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <HeaderProfile
            name="Bùi Quang Huy"
            country="Hà Nội, Việt Nam"
            url={require('../../assets/images/dai.jpg')}
          />
          <View
            style={{
              height: 3,
              width: 0.9 * widthScreen,
              backgroundColor: '#f2f2f2',
            }}
          />
        </View>
        <ScrollView style={{height: (2 * heightScreen) / 3}}>
          <View
            style={{
              height: heightScreen / 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <BodyProfile
              titletext="Tên đăng nhập"
              bodytext="Fedex2791999"
              url={require('../../assets/images/tendangnhap.jpg')}
              navigation={props.navigation}
              nameScreen="Main"
            />
          </View>
          <View
            style={{
              height: heightScreen / 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <BodyProfile
              titletext="Email"
              bodytext="codatduoc@gmail.com"
              url={require('../../assets/images/email.png')}
              navigation={props.navigation}
              nameScreen="Main"
            />
          </View>
          <View
            style={{
              height: heightScreen / 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <BodyProfile
              titletext="Mật khẩu"
              bodytext=""
              url={require('../../assets/images/password.png')}
              navigation={props.navigation}
              nameScreen="Main"
            />
          </View>
          <View
            style={{
              height: heightScreen / 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <BodyProfile
              titletext="Chia sẻ khóa học"
              bodytext="Fedex2791999"
              url={require('../../assets/images/share.png')}
              navigation={props.navigation}
              nameScreen="Main"
            />
          </View>
          <View
            style={{
              height: heightScreen / 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <BodyProfile
              titletext="Bảng xếp hạng"
              bodytext="Giải đấu Kim Cương"
              url={require('../../assets/images/chart.jpg')}
              navigation={props.navigation}
              nameScreen="Charts"
            />
          </View>
          <View
            style={{
              height: heightScreen / 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <BodyProfile
              titletext="Đăng xuất"
              bodytext=""
              url={require('../../assets/images/logout.png')}
              navigation={props.navigation}
              nameScreen="Login"
            />
          </View>
        </ScrollView>
      </View>
    );
  
}

export default Profile;
