import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { api } from "../../../../Constants";
import { useIsFocused, useNavigation } from "@react-navigation/native";
const VerifyUsers = () => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const fetchUser = () => {
    const apiURL = `${api}/api/v1/users?limit=1000&isVerify=true`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilterData(responseJson.data);
        setMasterData(responseJson.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    fetchUser();
  }, [isFocused]);
  const searchFilter = (text) => {
    const newData = masterData.filter((item) => {
      const itemData = item.firstName
        ? item.firstName.toUpperCase()
        : "".toUpperCase();
      item.firstName ? item.firstName.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    if (text) {
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };
  return (
    <>
      <TextInput
        value={search}
        onChangeText={(text) => searchFilter(text)}
        placeholder="Нэрээр хайх"
        style={{
          borderColor: "#cccccccc",
          padding: 10,
          borderRadius: 20,
          color: "black",
          margin: 10,
          borderWidth: 1,
        }}
        placeholderTextColor="#cccccccc"
      />
      {filterData.length > 0 && (
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 10,
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => navigation.navigate("UserDetail", { item })}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={require("../../../../assets/enau/solologo.png")}
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: "500" }}>
                        {item.lastName} {item.firstName}
                      </Text>
                      <Text style={{ fontWeight: "300", color: "grey" }}>
                        {item.phone}
                      </Text>
                      <Text style={{ fontWeight: "300", color: "grey" }}>
                        {item.type}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      color: item.isVerify ? "green" : "red",
                      position: "absolute",
                      right: 10,
                    }}
                  >
                    {item.isVerify ? "Баталгаажсан" : "Баталгаажаагүй"}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#cccccccc",
                    marginTop: 5,
                  }}
                />
              </>
            );
          }}
        />
      )}
    </>
  );
};

export default VerifyUsers;

const styles = StyleSheet.create({});
