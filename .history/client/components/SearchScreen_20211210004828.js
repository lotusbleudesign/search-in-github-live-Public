import * as React from 'react';
import { View, TextInput, Button, useWindowDimensions } from 'react-native';
import apiGithub from '../api/github';

const styles = require('../stylesheet/stylesheet');

export default function SearchScreen() {
  const [searchUser, setsearchUser] = useState("");

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