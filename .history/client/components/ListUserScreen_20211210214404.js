import * as React from 'react';
import { Text, View, StatusBar, ListItem } from 'react-native';

const styles = require('../stylesheet/stylesheet');
export default function ListUserScreen({ navigation, route }) {

  return (
    <View style={styles.screen} >
      <Text style={styles.text}>List user</Text>
      <StatusBar style="auto" />
    </View>
  )
}