import * as React from 'react';
import { Text, View } from 'react-native';

const styles = require('../stylesheet/stylesheet');

export default function AboutScreen() {
  return (
    <View style={styles.screen} >
      <Text style={styles.text}>About</Text>
    </View>
  )
}