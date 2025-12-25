// src/app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { HomeTabBarIcon, SettingsTabBarIcon } from "@/src/components/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: SettingsTabBarIcon,
        }}
      />
    </Tabs>
  );
}
