import { Image } from "expo-image";
// import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { HelloWave } from "@/src/components/hello-wave";
import ParallaxScrollView from "@/src/components/parallax-scroll-view";
import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import pkg from "../../../package.json";

const HomeScreen = () => (
  <ParallaxScrollView
    headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    headerImage={
      <Image
        source={require("@/src/assets/images/partial-react-logo.png")}
        style={styles.reactLogo}
      />
    }
  >
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Welcome! {pkg.version}</ThemedText>
      <HelloWave />
    </ThemedView>
  </ParallaxScrollView>
);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

export default HomeScreen;
