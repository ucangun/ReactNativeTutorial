//about.jsx

import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function About() {
  return (
    <View>
      <Text>This is the about page</Text>
      <Link href="/">Go to Home Screen</Link>
    </View>
  );
}
