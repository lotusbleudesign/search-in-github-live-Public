import * as React from 'react';
import { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const styles = require('../stylesheet/stylesheet');

export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  console.log(user);

  return (
    <ScrollView>
      <View
        style={styles.view}>

        <Text>{user.login}</Text>
        <Avatar
          size={64}
          source={{ uri: user.avatar_url }}
          rounded
          containerStyle={{ backgroundColor: '#00a7f7' }}
        />
      </View>
    </ScrollView>
  )
}