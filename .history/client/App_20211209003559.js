import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { env } from "./env";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const fetchUser = async (username) => {
    // const response = await fetch(`http://5707-82-124-194-242.ngrok.io/api/users/${username}`);
    const response = await fetch(`https://api.github.com/users/${username}`);

    headers: {
      Authorization: "token" + env.token;
    }

    if (response) {
      const data = await response.json();
      console.log(data);
    }
  }

  fetchUser("lotusbleudesign");

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
