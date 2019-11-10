import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Alert
} from 'react-native';

import KartuIsi from '../components/Home/KartuIsi';
import styles from '../style/style'

import KartuDetailAntrian from '../components/Home/KartuDetailAntrian.js';

class AmbilAntrian extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white', }}
                showsHorizontalScrollIndicator={false}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('AmbilAntrianScreen')} style={{ alignItems: 'center', padding: 20 }}>
                    <KartuDetailAntrian imageUri={require('../assets/wasd2.png')}
                        lokasi="Nama Merchant"
                        bagian="Lokasi Merchant"
                        current="00" />
                </TouchableOpacity>

                <View style={styles.alternativeLayoutButtonContainer}>
                    <TouchableHighlight onPress={() => Alert.alert('Nomor antrian anda : 000')} underlayColor="white">
                        <View style={styles.logoutButton}>
                            <Text style={styles.buttonText}>Antri</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </ScrollView>


        );
    }
}
export default AmbilAntrian;

AmbilAntrian.navigationOptions = {
    title: 'Ambil Antrian',
};