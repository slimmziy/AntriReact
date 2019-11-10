import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import AccountScreen from '../screens/AccountScreen';
import IsiMerchant from '../screens/IsiMerchant';
import DetailMerchant from '../screens/DetailMerchant';
import AmbilAntrian from '../screens/AmbilAntrianScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    IsiMerchant: IsiMerchant,
    DetailMerchant: DetailMerchant,
    AmbilAntrian: AmbilAntrian,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Beranda',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: ListScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Antrianku',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-lisr' : 'md-list'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: AccountScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Akun',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
