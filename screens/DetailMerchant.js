import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import KartuDetail from '../components/Home/KartuDetail';
import style from '../style/style'

class DetailMerchant extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white', }}
            showsHorizontalScrollIndicator={false}>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AmbilAntrian')} style={style.cardSpace}>
                  <KartuDetail imageUri={require('../assets/icon_sim.png')}
                    lokasi="Pelayanan SIM"
                    // bagian="Lokasi Merchant"
                    />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AmbilAntrian')} style={style.cardSpace}>
                  <KartuDetail imageUri={require('../assets/icon_skck.png')}
                    lokasi="Pelayanan SKCK"
                    // bagian="Lokasi Merchant 2"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('AmbilAntrian')} style={style.cardSpace}>
                  <KartuDetail imageUri={require('../assets/icon_tilang.jpg')}
                    lokasi="Pelayanan Tilang"
                    // bagian="Lokasi Merchant 3"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('AmbilAntrian')} style={style.cardSpace}>
                  <KartuDetail imageUri={require('../assets/icon_sidik_jari.jpg')}
                    lokasi="Pelayanan Sidik Jari"
                    // bagian="Lokasi Merchant 4"
                    />
                </TouchableOpacity>

            </ScrollView>

            
        );
    }
}
export default DetailMerchant;

DetailMerchant.navigationOptions = {
    title: 'Polda Bali',
  };