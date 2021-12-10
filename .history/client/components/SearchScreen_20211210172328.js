import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Button, Image, StatusBar } from 'react-native';
import apiGithub from '../api/github';
import styles from '../stylesheet/stylesheet';

export default function SearchScreen({ navigation }) {
  const [searchUser, setsearchUser] = useState(""); // setsearchUser => nom de fonction du setter
  //var toto = useState("");

  async function getUser() {
    navigation.navigate("UserScreen", { user: await apiGithub(searchUser) });
  }

  return (
    <View style={styles.screen}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg' }}
      />
      <TextInput style={styles.input} onChangeText={setsearchUser} placeholder="search an user.."></TextInput>
      <Button
        onPress={() => getUser()}
        title="Search"
        color="#5f5b58"
      />
      <StatusBar style="auto" />
    </View>
  )
}