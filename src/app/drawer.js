import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./screens/home";
import Item from "./screens/item";
import SideBar from "./screens/sidebar";

const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
    Item: { screen: Item }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;