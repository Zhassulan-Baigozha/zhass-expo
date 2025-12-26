export interface ITabBarIconProps {
  // focused: boolean;
  color: string;
  // size: number;
}

export interface IScreenItem {
  name: string;
  options: {
    title: string;
    tabBarIcon: (props: Readonly<ITabBarIconProps>) => React.JSX.Element;
  };
}
