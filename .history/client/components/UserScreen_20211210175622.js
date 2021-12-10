import * as React from 'react';
import { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../stylesheet/stylesheet';


export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  console.log(user);
  console.log(" ==> ", user, user.user.avatar_url)
  return (
    <ScrollView style={styles.screen}>
      <View
        style={styles.view}>
        <Text style={styles.text}>{user.user.login}</Text>
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