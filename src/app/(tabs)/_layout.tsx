// src/app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import {
  ExploreTabIcon,
  HapticTab,
  HomeTabIcon,
} from "@/src/components/tab-bar-button";
import { Colors } from "@/src/constants/theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ExploreTabIcon,
        }}
      />
    </Tabs>
  );
}
