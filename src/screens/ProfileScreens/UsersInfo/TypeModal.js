import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const TypeModal = (props) => {
  const { modalVisible, setModalVisible, setType } = props;
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      presentationStyle="formSheet"
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" color={"black"} size={30} />
          </TouchableOpacity>
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Гишүүнчлэлийн төрөл
          </Text>
          <Text>{"          "}</Text>
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "#cccccccc", marginBottom: 10 }}
        />
        <View style={{ marginHorizontal: 10 }}>
          {[
            "Засаглагч гишүүн",
            "Бүтээлч өрх бүл",
            "Бүтээлч гишүүн",
            "Дэмжигч өрх бүл",
            "Дэмжигч гишүүн",
          ].map((l, i) => (
            <TouchableOpacity
              onPress={() => {
                setType(l);
                setModalVisible(!modalVisible);
              }}
              key={i}
            >
              <Text style={[styles.text, { color: "black" }]}>{l}</Text>
              <View style={[styles.border, { borderColor: "#cccccccc" }]} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default TypeModal;

const styles = StyleSheet.create({
  text: {
    margin: 5,
    fontSize: 15,
    padding: 10,
  },
  border: {
    borderWidth: 1,
  },
});
