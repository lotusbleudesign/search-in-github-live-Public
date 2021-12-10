import * as React from 'react';
import { useState } from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../stylesheet/stylesheet';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  console.log(user);
  //console.log(" ==> ", user, user.user.avatar_url)
  return (

    <Card>
      <Card.Title style={styles.text}>{user.user.login}</Card.Title>
      <Card.Divider />
      <Image style={tinyLogo} resizeMode="cover"
        source={{ uri: 'https://avatars.githubusercontent.com/u/47507206?v=4' }} />
    </Card>
  )
}