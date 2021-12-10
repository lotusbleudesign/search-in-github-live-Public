import * as React from 'react';
import { View, TextInput, Button } from 'react-native';
import apiGithub from '../api/github';

const styles = require('../stylesheet/stylesheet');

/**
 *        iconName: 'github-alt',
        iconType: 'FontAwesome'
 * @returns 
 */
export default function SearchScreen() {
  const [searchUser, setsearchUser] = useState("");
  fetchUser("lotusbleudesign");
  return (
    <View style={styles.screen} >
      <TextInput style={styles.text} value="Search"></TextInput>
      <Button
        onPress={setsearchUser}
        title="Search"
        color="#841584"
      />
      <StatusBar style="auto" />
    </View>

  )
}