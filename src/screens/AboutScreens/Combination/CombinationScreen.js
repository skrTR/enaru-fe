import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../../components/Header";
const CombinationScreen = () => {
  return (
    <>
      <Header isBack={true} />
      <ScrollView>
        {/* Зорилго */}
        <>
          <Text style={{ fontWeight: "bold", fontSize: 22, margin: 10 }}>
            Эрхэм зорилго
          </Text>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 16,
              marginHorizontal: 10,
            }}
          >
            ХАМТЫН ХАРИУЦЛАГАТАЙ, ОЛОН ХЭВШИЛТ ӨМЧИЙН ТӨЛӨВЛӨГӨӨТ ЭДИЙН
            ЗАСАГТАЙ, ОЮУН УХААН МЭДЛЭГЭЭР ГОЛЛОСОН ДЭЛХИЙН МОНГОЛ ИРГҮНИЙГ
            БОЛОВСРУУЛЖ, ӨРХ БҮЛ ГАЛ АЙЛЫН ТОГТОЛЦООТОЙ, БАЙГАЛЬ НИЙХЭМИЙН
            ЗОХИСТОЙ ХАРИЛЦААТАЙ, ТУСГААР ТАВАН ТОГТНОЛЫГ ЭРХЭМЛЭСЭН, ТӨВШИН
            САЙХАН ЭНХИЙН ОРНЫГ ЭВ ХАМТААР ЦОГЦЛУУЛАН МАНДУУЛАХ ЭРХЭМ
            ЗОРИЛГОТОЙ.
          </Text>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 16,
              margin: 10,
            }}
          >
            ҮНДЭСНИЙ АЖ ТӨРӨХҮЙН УХААНЫ ОНОЛООР БАЯЛАГ БҮТЭЭГЧ, ХӨРӨНГӨ
            ОРУУЛАГЧДЫГ НЭГТГЭЖ ҮНДЭСНИЙ ИХ БҮТЭЭН БАЙГУУЛАЛТЫГ ЦОГЦЛООНО.
          </Text>
          {/* 4Colored box */}
          <>
            <View
              style={{
                backgroundColor: "#44a2d2",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                width: "60%",
                marginHorizontal: 10,
              }}
            >
              <Text>1. ҮНДЭСНИЙ АЖ ТӨРӨХҮЙ</Text>
            </View>
            <View
              style={{
                backgroundColor: "#0acf97",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                width: "60%",
                margin: 10,
                alignSelf: "flex-end",
              }}
            >
              <Text>2. ХӨРӨНГӨ ОРУУЛАГЧ</Text>
            </View>
            <View
              style={{
                backgroundColor: "#2d7bf4",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                width: "60%",
                marginHorizontal: 10,
              }}
            >
              <Text>3. БАЯЛАГ БҮТЭЭГЧИД</Text>
            </View>
            <View
              style={{
                backgroundColor: "#f9bc0b",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                width: "60%",
                margin: 10,
                alignSelf: "flex-end",
              }}
            >
              <Text>4. ИХ БҮТЭЭН БАЙГУУЛАЛТ</Text>
            </View>
          </>
        </>
        <View style={{ borderWidth: 2, borderColor: "#cccccccc" }} />
        {/* Үйл ажилгааний чиглэл */}
        <>
          <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>
            НЭГДЛИЙН ҮЙЛ АЖИЛЛАГААНЫ ҮНДСЭН 3 ЧИГЛЭЛ
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                1.Хүн, нийгэм
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  marginHorizontal: 10,
                  marginTop: 5,
                }}
              >
                1.1 Боловсрол
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  marginLeft: 20,
                  marginTop: 5,
                }}
              >
                1.2 Эрүүл мэнд
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  marginLeft: 30,
                  marginTop: 5,
                }}
              >
                1.3 Соёл хүмүүжил
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                2.УЛС АРДЫН АЖ АХУЙ
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  marginHorizontal: 10,
                  marginTop: 5,
                }}
              >
                2.1 Аж үйлдвэр
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  marginLeft: 20,
                  marginTop: 5,
                }}
              >
                2.2 Үйлчилгээ
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  marginLeft: 30,
                  marginTop: 5,
                }}
              >
                2.3 Хөрөнгө санхүү
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>3.ДЭД БҮТЭЦ</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "300",
                marginHorizontal: 10,
                marginTop: 5,
              }}
            >
              3.1 Барилга хот төлөвлөлт
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "300",
                marginLeft: 20,
                marginTop: 5,
              }}
            >
              3.2 Зам тээвэр, аялал жуулчлал
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "300",
                marginLeft: 30,
                marginTop: 5,
              }}
            >
              3.3 Эрчим хүч
            </Text>
          </View>

          {/* НЭГДЛИЙН ЗОРИЛТУУД*/}
          <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>
            НЭГДЛИЙН ЗОРИЛТУУД
          </Text>
          <View style={{ marginHorizontal: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,

                  width: "10%",
                }}
              >
                01
              </Text>
              <Text style={{ fontWeight: "300", width: "90%" }}>
                Байгальд ээлтэй, хөгжлийн төслүүдийг боловсруулах, хэрэгжүүлэх,
                уялдаа холбоог бий болгох
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#cccccccc",
                marginVertical: 5,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  width: "10%",
                }}
              >
                02
              </Text>
              <Text style={{ fontWeight: "300", width: "90%" }}>
                Баялаг бүтээгчидийг нэгтгэж кластерийн тогтолцоог бий болгох
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#cccccccc",
                marginVertical: 5,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  width: "10%",
                }}
              >
                03
              </Text>
              <Text style={{ fontWeight: "300", width: "90%" }}>
                Хөрөнгө оруулагчдыг татан оролцуулах, уялдаа холбоо бий болгох
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#cccccccc",
                marginVertical: 5,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  width: "10%",
                }}
              >
                04
              </Text>
              <Text style={{ fontWeight: "300", width: "90%" }}>
                Дэлхийн Монгол иргүнийг бүтээх боловсрол олгох, сургалт семинар
                зохион байгуулах
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#cccccccc",
                marginVertical: 5,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  width: "10%",
                }}
              >
                05
              </Text>
              <Text style={{ fontWeight: "300", width: "90%" }}>
                Ижил зорилготой байгууллагуудтай хамтран ажиллаж гадаад дотоод
                харилцааг бий болгох
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#cccccccc",
                marginVertical: 5,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  width: "10%",
                }}
              >
                06
              </Text>
              <Text style={{ fontWeight: "300", width: "90%" }}>
                Өрх бүл, гал айлын тогтолцоот засаглалыг бий болгох
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#cccccccc",
                marginVertical: 5,
              }}
            />
          </View>
        </>
      </ScrollView>
    </>
  );
};

export default CombinationScreen;

const styles = StyleSheet.create({});
