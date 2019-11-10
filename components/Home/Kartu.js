import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../style/style';

class Kartu extends Component {

    render() {
        return (
            <View style={{ height: 130, width: '100%', borderWidth: 2, borderColor: '#dddddd', borderRadius: 10 }} onPress>
                <View style={{ flex: 2, paddingLeft: 40 }}>
                <View >
                    <Text style={styles.cardTextHeading}>
                        {this.props.lokasi}
                    </Text>
                    
                </View>
                <View >
                    <Text style={styles.cardTextNormal}>{this.props.bagian}</Text>
                </View>
                </View>

                <View style={{ flex:1, paddingLeft: 40 }}>
                    <Text style={styles.cardTextNomor}>{this.props.nomor}</Text>
                </View>
            </View>
        );
    }
}

export default Kartu;