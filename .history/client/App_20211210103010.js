import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DrawerItems from './shared/DrawerItems';
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
        {DrawerItems.map(drawer =>
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            options={{
              drawerIcon: ({ focused }) => {
                switch (drawer.iconType) {
                  case 'AntDesign':
                    return (
                      < AntDesign name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />)
                  case 'Ionicons':
                    return (
                      <Ionicons name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />)
                  case 'FontAwesome5':
                    return (
                      <FontAwesome5 name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />)
                }
              }
            }}
            component={
              drawer.name === 'Search' ? 'SearchScreen'
                : drawer.name === 'ListUser' ? 'ListUserScreen'
                  : drawer.name === 'About' ? 'AboutScreen' : 'SearchScreen'}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

