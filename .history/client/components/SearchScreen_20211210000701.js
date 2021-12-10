import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import apiGithub from '.api/github';

const s = require('./style');

const styles = StyleSheet.create({
  screen: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  text: { fontSize: 16, fontWeight: '700' },
  itemStyle: { marginVertical: 10 },
})

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
    </View>
  )
}