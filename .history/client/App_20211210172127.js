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
import AboutScreen from "./components/AboutScreen";
import ListUserScreen from "./components/ListUserScreen";
import UserScreen from "./components/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {

  function CustomDrawerContent(props) {

    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
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
          name="Search"
          options={{
            drawerIcon: (focused) => (
              <AntDesign
                name="github"
                size={24}
                color={focused ? "#e91e63" : "black"}
              />)
          }}
          component={SearchScreen}
        />
        <Drawer.Screen
          name="ListUser"
          options={{
            drawerIcon: (focused) => (
              <Ionicons
                name="list-outline"
                size={24}
                color={focused ? "#e91e63" : "black"}
              />)
          }}
          component={ListUserScreen}
        />
        <Drawer.Screen
          name="About"
          drawerIcon={(focused) => (
            <FontAwesome5
              name="info-circle"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          )}
          component={AboutScreen}
        />
        <Drawer.Screen name="UserScreen" component={UserScreen} options={{ drawerItemStyle: { height: 0 } }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
