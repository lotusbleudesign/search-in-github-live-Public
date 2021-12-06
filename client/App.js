import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const fetchUser = async (username) => {
    const response = await fetch(`http://5707-82-124-194-242.ngrok.io/api/users/${username}`);//lien
    const data = await response.json();

    console.log(data);
  }

  fetchUser("Test");

  return (
    <View style={styles.container}>
      <Text>Hello !</Text>
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
