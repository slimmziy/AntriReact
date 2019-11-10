import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import KartuIsi from '../components/Home/KartuIsi';
import styles from '../style/style'

class IsiMerchant extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white', }}
            showsHorizontalScrollIndicator={false}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={{ alignItems: 'center', padding: 20 }}>
                  <KartuIsi imageUri={require('../assets/wasd2.png')}
                    lokasi="Nama Merchant"
                    bagian="Lokasi Merchant" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={{ alignItems: 'center', padding: 20 }}>
                  <KartuIsi imageUri={require('../assets/wasd2.png')}
                    lokasi="Nama Merchant 2"
                    bagian="Lokasi Merchant 2" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={{ alignItems: 'center', padding: 20 }}>
                  <KartuIsi imageUri={require('../assets/wasd2.png')}
                    lokasi="Nama Merchant 3"
                    bagian="Lokasi Merchant 3" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={{ alignItems: 'center', padding: 20 }}>
                  <KartuIsi imageUri={require('../assets/wasd2.png')}
                    lokasi="Nama Merchant 4"
                    bagian="Lokasi Merchant 4" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={{ alignItems: 'center', padding: 20 }}>
                  <KartuIsi imageUri={require('../assets/wasd2.png')}
                    lokasi="Nama Merchant 5"
                    bagian="Lokasi Merchant 5" />
                </TouchableOpacity>

            </ScrollView>

            
        );
    }
}
export default IsiMerchant;

IsiMerchant.navigationOptions = {
    title: 'Nama Merchant',
  };