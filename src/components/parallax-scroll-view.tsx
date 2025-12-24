// src/components/parallax-scroll-view.tsx
import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedRef,
} from "react-native-reanimated";

import { useThemeColor } from "@/src/hooks/use-theme-color";
import { ThemedView } from "./themed-view";

const HEADER_HEIGHT = 250;

export default function ParallaxScrollView({
  children,
}: Readonly<PropsWithChildren>) {
  const backgroundColor = useThemeColor({}, "background");
  const scrollRef = useAnimatedRef<Animated.ScrollView>();


  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ backgroundColor, flex: 1 }}
      scrollEventThrottle={16}
    >
      <ThemedView style={styles.content}>{children}</ThemedView>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
