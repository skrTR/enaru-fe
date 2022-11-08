import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: "80%" }}
    >
      <ActivityIndicator size={"large"} color={"#6a1b86"} />
      <Text style={{ fontSize: 20, fontWeight: "500" }}>
        Түр хүлээнэ үү.....
      </Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
