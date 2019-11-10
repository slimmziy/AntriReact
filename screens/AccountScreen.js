import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableHighlight
} from 'react-native';

import styles from '../style/style';
import AccountData from '../components/Home/AccountData';

class AccountScreen extends Component {

    logout() {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                <AccountData imageUri={require('../assets/wasd2.png')}
                    Username="Nama pengguna"
                    Email="nama-pengguna@mailprovider.com"
                    Handphone="+62 345 678 90"
                    Address="Indonesia" />
                {/* <View style={styles.alternativeLayoutButtonContainer}>
                    <TouchableHighlight onPress={_ => this.logout()} underlayColor="white">
                        <View style={styles.logoutButton}>
                            <Text style={styles.buttonText}>Keluar</Text>
                        </View>
                    </TouchableHighlight>
                </View> */}
            </View>
        );
    }
}

AccountScreen.navigationOptions = {
    title: 'Akun',
  };

export default AccountScreen;