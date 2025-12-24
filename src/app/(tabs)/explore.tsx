import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/src/components/parallax-scroll-view";
import { SpanText } from "@/src/components/span-text";
import { ThemedView } from "@/src/components/themed-view";
import { Collapsible } from "@/src/components/ui/collapsible";
import { IconSymbol } from "@/src/components/ui/icon-symbol";

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
      <SpanText>Title</SpanText>
    </ThemedView>
    <Collapsible title="Explore">
      <SpanText>Title</SpanText>
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
