// src/app/(tabs)/index.tsx

import { Text } from "react-native";
import pkg from "../../../package.json";

export default function HomeScreen() {
  return (
    <Text style={{ color: "#fff", fontSize: 32 }}>Welcome! {pkg.version}</Text>
  );
}
