import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import Header from "../../../components/Header";
import { Video } from "expo-av";
const ProjectScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <>
      <Header isBack={true} />
      <ScrollView>
        {/* Төслийн тухай */}
        <>
          <Text
            style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
          >
            Төслийн тухай
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "500", margin: 10 }}>
            ТӨСӨЛ ГЭЖ ЮУ ВЭ?
          </Text>
          <Text style={{ fontWeight: "300", marginHorizontal: 10 }}>
            Төсөл гэдэг бол аливаа үр дүнд хүрэхийн тулд өнгөрсөн ба өнөө цагийг
            судлан шинжилж ирээдүй цагийн төсөөлөл дээр хүссэн үр дүндээ
            эрсдэлгүйгээр хүрч болох эсэхийг буулгасан баримт бичиг байдаг.
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "500", margin: 10 }}>
            ТӨСЛИЙН СТАНДАРТ ТӨЛӨВЛӨЛТ
          </Text>
          <Image
            source={require("../../../../assets/project1.png")}
            style={{ width: "100%", resizeMode: "contain", height: 90 }}
          />
        </>
        {/* Video танилцуулга */}
        <>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 5,
            }}
          >
            Нэг төсөл нэг хөгжил хөдөлгөөн
          </Text>
          <Text style={{ margin: 10, fontWeight: "500", fontSize: 16 }}>
            Видео танилцуулга - 1
          </Text>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
          <Text style={{ margin: 10, fontWeight: "500", fontSize: 16 }}>
            Видео танилцуулга - 2
          </Text>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </>
        {/* Хот айл төсөл */}
        <ImageBackground
          style={{
            width: "100%",
            height: 150,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginBottom: 10,
          }}
          source={require("../../../../assets/project2.jpg")}
          imageStyle={{ opacity: 0.4 }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Хот айл төсөл
          </Text>
        </ImageBackground>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            margin: 10,
          }}
        >
          ХОТ АЙЛ ТӨСЛИЙН ЗОРИЛГО Тархмал нутаг дэвсгэрт оршин байх, нөхөн
          сэргээгдэх шинж чанар бүхий түүхий эдийг нэг стандарт технологи
          ашиглан үйлдвэрлэлийн ашигтай нөөц болгон хувиргаж импортыг орлох
          бүтээгдэхүүн үйлдвэрлэхэд хот айл төслийн зорилго оршино. Нэгдлийн
          гишүүдийн оролцоо, нэгдмэл үнэт зүйл дээр тулгуурлан энэхүү төслийг
          бүтээн байгуулна.
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginHorizontal: 20,
            textAlign: "center",
          }}
        >
          Боловсруулагдаж буй төслүүд
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            margin: 10,
          }}
        >
          Төслүүд
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            1.ХУУРАЙ СҮҮ
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            2.ЦАГААН ИДЭЭ
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            3.БЯСЛАГНЫ ҮЙЛДВЭР
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            4.МАХНЫ ҮЙЛДВЭР
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            5.НООСНЫ ҮЙЛДВЭР
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            6.АРЬС ШИР, НЭХИЙ БОЛОВСРУУЛАХ
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            7.ОЙН ХАЯГДАЛ МОД БОЛОВСРУУЛАХ
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            8.ЭКО БАРИЛГЫН МАТЕРИАЛЫН ҮЙЛДВЭР
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            9.НОГОО ХАДГАЛАХ
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            10.ЖИМС ЖИМСГЭНЭ
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            11.ЭКО ЭРЧИМ ХҮЧ
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            margin: 10,
            textAlign: "right",
          }}
        >
          НООСНЫ ҮЙЛДВЭРЭЭС БОЛОВСРУУЛАГДАХ БЭЛЭН БҮТЭЭГДЭХҮҮНҮҮД
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              textAlign: "right",
            }}
          >
            1.Угаасан ноос
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              textAlign: "right",
            }}
          >
            2.Хялгас, хөөвөр
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              textAlign: "right",
            }}
          >
            3.Элдсэн нэхий, арьс
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              textAlign: "right",
            }}
          >
            4.Хөнжил, пүүгээ
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              textAlign: "right",
            }}
          >
            5.Дулаалгын материал
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              textAlign: "right",
            }}
          >
            6.Эсгий
          </Text>
        </View>
        <View style={{ marginBottom: 200 }} />
      </ScrollView>
    </>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    width: "100%",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: 200,
  },
});
