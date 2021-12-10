import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import apiGithub from '.api/github';

const styles = StyleSheet.create({
  screen: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  text: { fontSize: 16, fontWeight: '700' },
  itemStyle: { marginVertical: 10 },
})

const SearchScreen = ({ }) => {

  return (
    <View style={styles.screen} >
      <TextInput style={styles.text} value="Search"></TextInput>
      <Button
        onPress={onPressLearnMore}
        title="Search"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}