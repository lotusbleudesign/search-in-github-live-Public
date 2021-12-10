import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';

const styles = require('../stylesheet/stylesheet');
export default function ListUserScreen() {
  return (
    <View style={styles.screen} >
      <Text style={styles.text}>About</Text>
      <StatusBar style="auto" />
    </View>
  )
}