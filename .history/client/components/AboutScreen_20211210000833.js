import * as React from 'react';
import { Text, View } from 'react-native';

const styles = require('./style');

export default function AboutScreen() {
  return (
    <View style={styles.screen} >
      <Text style={styles.text}>About</Text>
    </View>
  )
}