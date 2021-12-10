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
    <ScrollView >
      <View
        style={styles.view}>
        <Avatar
          size={74}
          source={{ uri: user.user.avatar_url }}
          rounded
          containerStyle={{ backgroundColor: '#00a7f7' }}
        />
        <Text style={styles.text}>{user.user.login}</Text>
        <View style={styles.view}>
          <Text style={styles.text}>{user.user.html_url}</Text>
        </View >

        <
        <Text style={styles.text}>{user.user.followers_url}</Text>
        <Text style={styles.text}>{user.user.following_url}</Text>
        <Text style={styles.text}>{user.user.bio}</Text>
      </View >
    </ScrollView >
  )
}