import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


class Question extends Component {
    render() {
        const { titleQuestion, bodyQuestion } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{titleQuestion}</Text>
                <Text style={styles.body}>{bodyQuestion}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        flex: 1,
        fontSize: 20,

    },
    body: {
        flex: 2,
        fontSize: 36,
        fontWeight: 'bold',
    }
})
export default Question;