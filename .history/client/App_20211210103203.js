import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import 'react-native-gesture-handler';

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

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Search"
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}
      >
        <Drawer.Screen
          name="Search"
        />
      </Drawer.Navigator>
    </NavigationContainer >
  );
}

