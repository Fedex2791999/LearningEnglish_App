import React, { Component } from 'react';

import {
    View,
    Text,
    Dimensions,
    ScrollView,
    Button,
} from 'react-native';
import HeaderProfile from '../../components/Profile/HeaderProfile';
import BodyProfile from '../../components/Profile/BodyProfile';

var heightScreen = Dimensions.get('window').height;
var widthScreen = Dimensions.get('window').width;

class Profile extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{ height: heightScreen / 3, flexDirection: 'column', alignItems: 'center' }}>
                    <HeaderProfile name="Mai Thế Đại" country="Hà Nội, Việt Nam" url={require('../../assets/images/dai.jpg')} />
                    <View style={{ height: 3, width: 0.9 * widthScreen, backgroundColor: '#f2f2f2' }}>

                    </View>
                  
                </View>
                <ScrollView style={{ height: 2 * heightScreen / 3 }}>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile titletext="Tên đăng nhập" bodytext='nguyendinh1802' url={require('../../assets/images/tendangnhap.jpg')} navigation={this.props.navigation} nameScreen='Main'/>
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile  titletext="Email" bodytext='nguyendinh1802@gmail.com' url={require('../../assets/images/email.png')} navigation={this.props.navigation} nameScreen='Main'/>
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile  titletext="Mật khẩu" bodytext='' url={require('../../assets/images/password.png')} navigation={this.props.navigation} nameScreen='Main'/>
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile  titletext="Chia sẻ khóa học" bodytext='nguyendinh1802' url={require('../../assets/images/share.png')} navigation={this.props.navigation} nameScreen='Main'/>
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile  titletext="Bảng xếp hạng" bodytext='Giải đấu Kim Cương' url={require('../../assets/images/chart.jpg')} navigation={this.props.navigation} nameScreen='Charts'/>
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile  titletext="Đăng xuất" bodytext='' url={require('../../assets/images/logout.png')} navigation={this.props.navigation} nameScreen='Login'/>
                    </View>
                </ScrollView>
            </View>
        );
    }
};

export default Profile;
