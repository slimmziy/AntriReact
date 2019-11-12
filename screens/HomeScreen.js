import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import styles from "../style/style";

import Category from "../components/Home/Category";
import GetFlatListItem from "./supports/GetFlatList";

import { MonoText } from "../components/StyledText";
import { HeaderTitle } from "react-navigation-stack";

const { height, width } = Dimensions.get("window");

class HomeScreen extends Component {
  componentDidMount() {
    return fetch("http://localhost:3333/merchants")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            // In this block you can do something with new state.
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B"
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView scrollEventThrotle={16}>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
              <Text style={styles.heading}>ANTRIAN TERAKHIR</Text>
            </View>

            <FlatList
              data={this.state.dataSource}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={({ item }) => (
                <Text
                  style={styles.FlatListItemStyle}
                  onPress={this.GetFlatListItem.bind(this, item.fruit_name)}
                >
                  {" "}
                  {item.fruit_name}{" "}
                </Text>
              )}
              keyExtractor={(item, index) => index}
            />

            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/wasd2.png")}
                    name="Terakhir 1"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/wasd2.png")}
                    name="Terakhir 2"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/wasd2.png")}
                    name="Terakhir 3"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/wasd2.png")}
                    name="Terakhir 4"
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>

            <View>
              <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
                <Text style={styles.heading}>ANTRIAN POPULER</Text>
              </View>
              <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.normal}>
                  Semua yang kamu mau tunggu, jadi satu disini
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <View
                    style={{
                      width: width - 40,
                      height: 250,
                      marginTop: 20,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "#dddddd"
                    }}
                  >
                    <Image
                      style={{
                        flex: 2.5,
                        height: null,
                        width: null,
                        resizeMode: "cover",
                        borderRadius: 10
                      }}
                      source={require("../assets/wasd2.png")}
                    />
                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                      <Text style={styles.semiHeading}>
                        Antrian paling populer
                      </Text>
                      <Text style={styles.normal}>
                        Skidipappap Sawadihap Konkunhap
                        Alahaphapljhdfsglhdflghdlfkhg
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ height: 130, marginTop: 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/wasd2.png")}
                    name="Populer 1"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/wasd2.png")}
                    name="Populer 2"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/wasd2.png")}
                    name="Populer 3"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/wasd2.png")}
                    name="Populer 4"
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>

            {/* <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                KATEGORI
              </Text>
            </View> */}
            {/*Grid*/}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;

HomeScreen.navigationOptions = {
  title: "Saku Antri"
};
