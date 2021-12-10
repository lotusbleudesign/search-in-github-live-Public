import * as React from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import apiGithub from '../api/github';

const styles = require('../stylesheet/stylesheet');

/**
 *        iconName: 'github-alt',
          iconType: 'FontAwesome'
 * @returns 
 */

function fetchUser() {

  const response = fetch(`http://5707-82-124-194-242.ngrok.io/api/users/${username}`);
  return data = response.json();
}

export default function SearchScreen() {
  const [searchUser, setsearchUser] = useState(""); // setsearchUser => nom de fonction du setter

  return (
    <View style={styles.screen}>
      <Image
        style={styles.tinyLogo}

      />
      <TextInput style={styles.text} value={searchUser} onChange={setsearchUser}>Search</TextInput>
      <Button
        onPress={() => console.log(fetchUser(searchUser))}
        title="Search"
        color="#841584"
      />
      <StatusBar style="auto" />
    </View>

  )
}