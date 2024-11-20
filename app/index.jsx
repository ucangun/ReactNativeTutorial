// import { Link } from "expo-router";
import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("../assets/adaptive-icon.png");

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: "60" }}>
      {/* <Text>
        <Text style={{ color: "white" }}>Hello </Text>
        World
      </Text> */}
      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}
      {/* <Image
        source={{ uri: "https://picsum.photos/500" }}
        style={{ width: 300, height: 300, objectFit: "cover" }}
      /> */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image</Text>
      </ImageBackground>
    </View>
  );
}
