import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Button, Image, StatusBar } from 'react-native';
import apiGithub from '../api/github';

const styles = require('../stylesheet/stylesheet');

/**
 *        iconName: 'github-alt',
          iconType: 'FontAwesome'
 * @returns 
 */

// const fetchUser = async (username) => {
//   const response = await fetch(`http://5707-82-124-194-242.ngrok.io/api/users/${username}`);
//   return data = response.json();
// }


export default function SearchScreen() {
  const [searchUser, setsearchUser] = useState(""); // setsearchUser => nom de fonction du setter
  //var toto = useState("");

  return (
    <View style={styles.screen}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg' }}
      />
      <TextInput style={styles.input} value={searchUser} onChangeText={setsearchUser} placeholder="search an user.."></TextInput>
      <Button
        onPress={() => console.log(apiGithub(toto))}
        title="Search"
        color="#5f5b58"
      />
      <StatusBar style="auto" />
    </View>
  )
}