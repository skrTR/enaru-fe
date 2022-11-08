import { ScrollView, StyleSheet, Text, ImageBackground } from "react-native";
import React from "react";
import Header from "../../../components/Header";

const EducationScreen = () => {
  return (
    <>
      <Header isBack={true} />
      <ScrollView>
        {/* Үндсэн сургалт */}
        <ImageBackground
          source={require("../../../../assets/enau/lesson1.jpg")}
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ opacity: 0.3 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 30, margin: 10 }}>
            Үндсэн сургалт
          </Text>
        </ImageBackground>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14,
            margin: 10,
            textAlign: "justify",
          }}
        >
          Эзэн Чингис хааны зарлигаар Их Монгол улсын Эрдэмтэн мөргүн нар төрийг
          тохинуулж,иргүнийг төрөөр бадраах алдарт онолыг бүтээн эмхтгэж үр
          хойчдоо тасралтгүй өртөөлөн дамжуулж байхаар тогтоосон.Зарлигийг
          хэрэгжүүлэхэд их эзний отгон хүү Толуйн хатан Сорхогтани бэкинү цэцэн
          онцгой үүрэг гүйцэтгэж,уг номуудын амин чанаруудыг нэгтгэж,Их эзэн
          Чингис хаантай Хөх Монголчуудын”Төрийн амин чанарын дээд онол” буюу
          ард түмний нэрлэснээр ”АЛТАН ДЭЭД ҮНЭНИЙ АЯЛГУУ”-г бүтээжээ.Тэр үес
          хойш алдарт айлдвар 15 үе дамжин цээжлэгдсээр ирсэн ба Хөх нохойн
          овогт Журнайн Нүрзэд орчин цагийн кирилл үсэгт буулгасан.Энэхүү АДҮА
          судрыг Инару нэгдэл албан ёсны зөвшөөрөлтэй гишүүддээ сургадаг.
        </Text>
        {/* Бодлогын сургалт */}
        <ImageBackground
          source={require("../../../../assets/enau/lesson2.jpg")}
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ opacity: 0.3 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 30, margin: 10 }}>
            Бодлогын сургалт
          </Text>
        </ImageBackground>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14,
            margin: 10,
            textAlign: "justify",
          }}
        >
          ИНАРУ нэгдлийн зорилгыг хэрэгжүүлэхтэй холбоотой нэгдлийн үнэт
          зүйл,эрхэм зорилго, стратеги төлөвлөлт,үйл ажиллагааны чиглэлтэй
          холбоотой сургалтууд
        </Text>
        {/* Үнэ цэнийн сургалт*/}
        <ImageBackground
          source={require("../../../../assets/enau/lesson3.jpg")}
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ opacity: 0.3 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 30, margin: 10 }}>
            Үнэ цэнийн сургалт
          </Text>
        </ImageBackground>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14,
            margin: 10,
            textAlign: "justify",
          }}
        >
          Амьдралын туршлага өөрийн ажил мэргэжлийн болон хувь хүний
          хуримтлуулсан үнэ цэнэ дээр тулгуурласан сургалтууд
        </Text>
      </ScrollView>
    </>
  );
};

export default EducationScreen;

const styles = StyleSheet.create({});
