import { SettingsTabBarIcon } from "../components/TabBarIcon";
import type { IScreenItem } from "../interfaces/screens";

export const SettingsScreen: IScreenItem = {
  name: "settings",
  options: {
    title: "Settings",
    tabBarIcon: SettingsTabBarIcon,
  },
};
