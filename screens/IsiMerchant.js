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

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={styles.cardSpace}>
                  <KartuIsi imageUri={require('../assets/kepolisian/polda_bali.jpg')}
                    lokasi="Polda Bali"
                    bagian="Jl. WR Supratman No.7, Sumerta Kauh, Kec. Denpasar Tim., Kota Denpasar, Bali 80236" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={styles.cardSpace}>
                  <KartuIsi imageUri={require('../assets/kepolisian/polresta_denpasar.jpg')}
                    lokasi="Polresta Denpasar"
                    bagian="Jl. Gunung Sanghyang No.110, Padangsambian, Kec. Denpasar Bar., Kota Denpasar, Bali 80117" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={styles.cardSpace}>
                  <KartuIsi imageUri={require('../assets/kepolisian/polres_badung.jpg')}
                    lokasi="Polres Badung"
                    bagian="Jl. Kebo Iwa No.1, Mengwitani, Kec. Mengwi, Kabupaten Badung, Bali 80351" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={styles.cardSpace}>
                  <KartuIsi imageUri={require('../assets/kepolisian/polres_tabanan.jpg')}
                    lokasi="Polres Tabanan"
                    bagian="Jl. Pahlawan No.12, Delod Peken, Kec. Tabanan, Kabupaten Tabanan, Bali 82113" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMerchant')} style={styles.cardSpace}>
                  <KartuIsi imageUri={require('../assets/kepolisian/polres_klungkung.jpg')}
                    lokasi="Polres Klungkung"
                    bagian="Jl. Untung Surapati No.28, Semarapura Tengah, Kec. Klungkung, Kabupaten Klungkung, Bali 80711" />
                </TouchableOpacity>

            </ScrollView>

            
        );
    }
}
export default IsiMerchant;

IsiMerchant.navigationOptions = {
    title: 'Kepolisian',
  };