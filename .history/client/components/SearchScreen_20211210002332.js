import * as React from 'react';
import { View, TextInput, Button } from 'react-native';
import apiGithub from '../api/github';


export default function SearchScreen() {

  const styles = require('../stylesheet/stylesheet');
  const [searchUser, setsearchUser] = useState("");

  return (
    <View style={styles.screen} >
      <TextInput style={styles.text} value="Search"></TextInput>
      <Button
        onPress={setsearchUser}
        title="Search"
        color="#841584"
      />
    </View>
  )
}