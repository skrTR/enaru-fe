import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../../../components/Header";

const TeamScreen = () => {
  return (
    <>
      <Header isBack={true} />
      <ScrollView>
        <ImageBackground
          source={require("../../../../assets/enau/121806400_1601676896679104_7832668711518288116_n.png")}
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ opacity: 0.3 }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Дэмжигч өрх бүл, гишүүн
          </Text>
          <Text
            style={{
              position: "absolute",
              bottom: 5,
              right: 10,
              fontWeight: "500",
            }}
          >
            Гишүүн - 99,000
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 5,
              left: 10,
              fontWeight: "500",
            }}
          >
            Өрх бүл - 149,000
          </Text>
        </ImageBackground>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            1.МЭДЭЭЛЭЛ АВАХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            2.НЭГДЛИЙН ҮЙЛ АЖИЛЛАГААНД ОРОЛЦОХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            3.ВЕБ АПП АШИГЛАХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            4.ГРУППТ НЭГДЭХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            5.ЗАР ОРУУЛАХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            6.БОЛОВСРОЛ АВАХ АДГ- I-Р ТҮВШИН
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            7.ХҮСЛИЙН ЗҮЙТЭН
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            8.ИХ МОНГОЛ ЯЗГУУРТНЫ ЭРДЭНЭТ 9 ШИНЖЭЭР БОЛОВСРОХ
          </Text>
        </View>
        <ImageBackground
          source={require("../../../../assets/enau/p7mq3.jpg")}
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ opacity: 0.3 }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Бүтээлч өрх бүл, гишүүн
          </Text>
          <Text
            style={{
              position: "absolute",
              bottom: 5,
              right: 10,
              fontWeight: "500",
            }}
          >
            Гишүүн - 333,000
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 5,
              left: 10,
              fontWeight: "500",
            }}
          >
            Өрх бүл - 499,000
          </Text>
        </ImageBackground>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            1.МЭДЭЭЛЭЛ АВАХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            2.НЭГДЛИЙН ҮЙЛ АЖИЛЛАГААНД ОРОЛЦОХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            3.ВЕБ АПП АШИГЛАХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            4.АПП АЖЛЫН ОРЧИНТОЙ БАЙХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            5.ГРУПП ҮҮСГЭХ, НЭГДЭХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            6.ЗАР ОРУУЛАХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            7.ТӨСЛИЙН ТАНИЛЦУУЛГА
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            8.БОЛОВСРОЛ АВАХ - АДГ I, II-Р ТҮВШИН
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            9.ХҮСЛИЙН ЗҮЙТЭН,ДЭМЧ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            10.ИХ МОНГОЛ ЯЗГУУРТНЫ ЭРДЭНЭТ 9 ШИНЖЭЭР БОЛОВСРОХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            11.ТУХАЙН ТӨСӨЛ, ХОРШОО, КОМПАНИД ХӨДӨЛМӨРИЙН ОРОЛЦООТОЙ БАЙХ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            12.ТӨСЛИЙН ХЭРЭГЖҮҮЛЭГЧ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            13.ТӨСЛИЙН ОРОЛЦОГЧ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            14.ТӨСЛИЙН ХӨРӨНГӨ ОРУУЛАГЧ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            14.ГАЛ АЙЛЫН ТОГТОЛЦОО БАЙГУУЛАХ
          </Text>
        </View>
        <ImageBackground
          source={require("../../../../assets/enau/burtguuleh-head.jpg")}
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ opacity: 0.3 }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Засаглагч гишүүн
          </Text>
          <Text
            style={{
              position: "absolute",
              bottom: 5,
              right: 10,
              fontWeight: "500",
            }}
          >
            Гишүүн - 999,000
          </Text>
        </ImageBackground>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            1.ЁС САХИУЛАГЧ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            2.ДЭГ САХИУЛАГЧ
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 17, marginTop: 5 }}>
            3.АХУЙ ЗАХИРАГЧ
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default TeamScreen;

const styles = StyleSheet.create({});
