// src/app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { ScreensItem } from "@/src/screens";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "blue" }}>
      {ScreensItem.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            tabBarIcon: screen.options.tabBarIcon,
            title: screen.options.title,
          }}
        />
      ))}
    </Tabs>
  );
}
