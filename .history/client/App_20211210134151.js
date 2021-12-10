import * as React from "react";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import "react-native-gesture-handler";

import SearchScreen from "./components/SearchScreen";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  // const fetchUser = async (username) => {
  //   // const response = await fetch(`http://5707-82-124-194-242.ngrok.io/api/users/${username}`);
  //   const response = await fetch(`https://api.github.com/users/${username}`);

  //   if (response) {
  //     const data = await response.json();
  //     console.log(data);
  //   }
  // }

  // fetchUser("lotusbleudesign");

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
      </DrawerContentScrollView>
    );
  }


  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerType="front"
        initialRouteName="Search"
        screenOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10 },
        }}
      >
        <Drawer.Screen
          name="SearchScreen"
          drawerIcon={() => (
            <FontAwesome5
              name="Search"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          )}
        />
        <Drawer.Screen
          name="ListUser"
          drawerIcon={() => (
            <AntDesign
              name="List user"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          )}
        />
        <Drawer.Screen
          name="About"
          drawerIcon={() => (
            <FontAwesome5
              name="About"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          )}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
