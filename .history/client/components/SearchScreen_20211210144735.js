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

async function fetchUser(username) {

  const response = await fetch(`http://5707-82-124-194-242.ngrok.io/api/users/${username}`);
  return data = response.json();
}

export default function SearchScreen() {
  const [searchUser, setsearchUser] = useState(""); // setsearchUser => nom de fonction du setter

  return (
    <View style={styles.screen}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg' }}
      />
      <TextInput style={styles.text} value={searchUser} onChange={setsearchUser}></TextInput>
      <Button
        onPress={() => console.log(fetchUser(searchUser))}
        title="Search"
        color="#FFCC33"
      />
      <StatusBar style="auto" />
    </View>
  )
}