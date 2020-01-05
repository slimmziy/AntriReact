import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import style from '../../style/style'

class Category extends Component {

    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 10 }} onPress>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 10 }} />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.categoryName}</Text>
                    <Text style={style.bold}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});