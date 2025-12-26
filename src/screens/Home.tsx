import { HomeTabBarIcon } from "../components/TabBarIcon";
import type { IScreenItem } from "../interfaces/screens";

export const HomeScreen: IScreenItem = {
  name: "index",
  options: {
    title: "Home",
    tabBarIcon: HomeTabBarIcon,
  },
};
