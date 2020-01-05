import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import styles from "../style/style";

import Category from "../components/Home/Category";
import GetFlatListItem from "./supports/GetFlatList";

import { MonoText } from "../components/StyledText";
import { HeaderTitle } from "react-navigation-stack";

const { height, width } = Dimensions.get("window");

class HomeScreen extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  
  // componentDidMount() {

  //   return fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson,
  //       }, function(){

  //       });

  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }

  

  render() {
    // if(this.state.isLoading){
    //   return(
    //     <View style={{flex: 1, padding: 20}}>
    //       <ActivityIndicator/>
    //     </View>
    //   )
    // }

    return (
      <View style={styles.container}>
        <ScrollView scrollEventThrotle={16}>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
              <Text style={styles.heading}>ANTRIAN TERAKHIR</Text>
            </View>

            <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.body}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>

            {/* <FlatList
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
            /> */}

            <View style={{ height: 130 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/icon_sim.png")}
                    categoryName="Pelayanan SIM"
                    name="Polda Bali"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/icon_doctor.png")}
                    categoryName="Dokter Umum"
                    name="Dr. Ida Bagus Andy Pradnyana"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/icon_bpjs.png")}
                    categoryName="BPJS Kesehatan"
                    name=""
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/icon_doctor.png")}
                    categoryName="Dokter Gigi"
                    name="Dr.I Gede Wiryanata Prianta"
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
                        resizeMode: "contain",
                        borderRadius: 10
                      }}
                      source={require("../assets/icon_doctor.png")}
                    />
                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                      <Text style={styles.semiHeading}>
                        Dokter Umum
                      </Text>
                      <Text style={styles.bold}>
                        Dr.I Gede Made Andy Wiryatama
                      </Text>
                      <Text style={styles.normal}>
                        Jl. Gunung Agung no.14, Denpasar Utara
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
                    imageUri={require("../assets/icon_bpjs.png")}
                    categoryName="BPJS Kesehatan"
                    name=""
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/icon_doctor.png")}
                    categoryName="Dokter Gigi"
                    name="Dr.I Gede Wiryanata Prianta"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/icon_sim.png")}
                    categoryName="Pelayanan SIM"
                    name="Polda Bali"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("IsiMerchant")}
                >
                  <Category
                    imageUri={require("../assets/icon_doctor.png")}
                    categoryName="Dokter Umum"
                    name="Dr. Ida Bagus Andy Pradnyana"
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
