// import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/src/components/parallax-scroll-view";
import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import { Collapsible } from "@/src/components/ui/collapsible";
import { IconSymbol } from "@/src/components/ui/icon-symbol";
import { Fonts } from "@/src/constants/theme";

const TabTwoScreen = () => (
  <ParallaxScrollView
    headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    headerImage={
      <IconSymbol
        size={310}
        color="#808080"
        name="chevron.left.forwardslash.chevron.right"
        style={styles.headerImage}
      />
    }
  >
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
        Title
      </ThemedText>
    </ThemedView>
    <Collapsible title="Explore">
      <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.rounded }}>
        Collapsible
      </ThemedText>
    </Collapsible>
  </ParallaxScrollView>
);

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default TabTwoScreen;
