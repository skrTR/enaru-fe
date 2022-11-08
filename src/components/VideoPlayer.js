import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { api } from "../../Constants";
import { Video } from "expo-av";
import Loading from "./Loading";
const VideoPlayer = ({ route }) => {
  const { videoLink } = route.params;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <>
      {status.positionMillis < 0 ? <Loading /> : null}
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: `${api}/upload/${videoLink}`,
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        shouldPlay={true}
      />
      {/* <Video
        source={{ uri: `${api}/upload/${videoLink}` }}
        style={{ flex: 1 }}
      /> */}
    </>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    width: "100%",
    height: "100%",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});
