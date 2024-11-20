import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="/about">Go to About Screen</Link>
    </View>
  );
}
