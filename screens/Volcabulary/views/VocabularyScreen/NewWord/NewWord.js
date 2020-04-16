import React, { Component } from 'react';
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



var widthScreen = 0.9 * Dimensions.get('window').width;

class NewWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            process: 0
        };
        this.changeActiveIndex_A = this.changeActiveIndex_A.bind(this)
        this.changeActiveIndex_B = this.changeActiveIndex_B.bind(this)
        this.changeActiveIndex_C = this.changeActiveIndex_C.bind(this)
        this.changeActiveIndex_D = this.changeActiveIndex_D.bind(this)
        this.updateProcess = this.updateProcess.bind(this)
    }
    updateProcess = () =>{
        this.setState({
            process: this.state.process + 0.1
        });
    }
    changeActiveIndex_A() {
        this.setState({
            activeIndex: 1
        });
        console.log(this.state.activeIndex)
    }
    changeActiveIndex_B() {
        this.setState({
            activeIndex: 2
        });
        console.log(this.state.activeIndex)
    }
    changeActiveIndex_C() {
        this.setState({
            activeIndex: 3
        });
        console.log(this.state.activeIndex)
    }
    changeActiveIndex_D() {
        this.setState({
            activeIndex: 4
        });
        console.log(this.state.activeIndex)
    }
   
    log() {
        console.log("da nhan")
    }
    render() {
       
        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                        <IconClose navigation={this.props.navigation}/>
                    </View>
                    <View style={{
                        flex: 9,
                        justifyContent: 'center'
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

                <View style={{
                    flex: 2,
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <Question titleQuestion='Chọn đáp án đúng: ' bodyQuestion='Đâu là "quả dâu" ?' />
                </View>

                <View style={{
                    flex: 6,
                    flexDirection: 'column',
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={this.changeActiveIndex_A}>
                            <Answer url={require('../../../assets/images/strawberry-icon.png')} text='Strawberry' flag='1' isActive={this.state.activeIndex === 1} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={this.changeActiveIndex_B}>
                            <Answer url={require('../../../assets/images/orange.png')} text='Orange' flag='2' isActive={this.state.activeIndex === 2} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={this.changeActiveIndex_C}>
                            <Answer url={require('../../../assets/images/banana.png')} text='Banana' flag='3' isActive={this.state.activeIndex === 3} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={this.changeActiveIndex_D}>
                            <Answer url={require('../../../assets/images/apple.png')} text='Apple' flag='4' isActive={this.state.activeIndex === 4} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ flex: 1 }}>
                    <CheckButton check={this.state.activeIndex === 0} checkItem = {this.state.activeIndex} navigation={this.props.navigation} numberScreen='1'/>
                    {/* <CheckButton navigation={this.props.navigation}/> */}
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})
export default NewWord;