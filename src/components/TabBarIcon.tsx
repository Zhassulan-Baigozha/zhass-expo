// src/components/TabBarIcon.tsx
import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { ITabBarIconProps } from "../interfaces/screens";

export function HomeTabBarIcon(props: Readonly<ITabBarIconProps>) {
  return <FontAwesome size={28} name="home" color={props.color} />;
}

export function SettingsTabBarIcon(props: Readonly<ITabBarIconProps>) {
  return <FontAwesome size={28} name="cog" color={props.color} />;
}
