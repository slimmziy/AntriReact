import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import styles from '../../style/style'

class AccountData extends Component {

    render() {
        return (

            <View style={{ alignItems: 'center', paddingBottom: 50 }}>
                    <Image source={this.props.imageUri}
                        style={styles.imageAccount}
                    />

                    <View style={{padding: 50, alignItems: 'center'}}>
                        <Text style={styles.heading}>{this.props.Username}</Text>

                        <Text style={styles.normal}>{this.props.Email}</Text>

                        <Text style={styles.normal}>{this.props.Handphone}</Text>

                        <Text style={styles.normal}>{this.props.Address}</Text>
                    </View>

                </View>
        );
    }
}

export default AccountData;