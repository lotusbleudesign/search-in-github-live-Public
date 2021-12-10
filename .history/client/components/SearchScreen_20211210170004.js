import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Button, Image, StatusBar } from 'react-native';
import apiGithub from '../api/github';
import styles from '../stylesheet/stylesheet';

/**
 *        iconName: 'github-alt',
          iconType: 'FontAwesome'
 * @returns 
          await apiGithub(searchUser)
 */

// const fetchUser = async (username) => {
//   const response = await fetch(`http://5707-82-124-194-242.ngrok.io/api/users/${username}`);
//   return data = response.json();
// }


export default function SearchScreen({ navigation }) {
  const [searchUser, setsearchUser] = useState(""); // setsearchUser => nom de fonction du setter
  //var toto = useState("");
  async function getUser() {
    await apiGithub(searchUser)
  }
  return (
    <View style={styles.screen}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg' }}
      />
      <TextInput style={styles.input} onChangeText={setsearchUser} placeholder="search an user.."></TextInput>
      <Button
        onPress={async () => navigation.navigate("UserScreen")}
        title="Search"
        color="#5f5b58"
      />
      <StatusBar style="auto" />
    </View>
  )
}