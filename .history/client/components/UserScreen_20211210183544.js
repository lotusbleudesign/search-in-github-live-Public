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

      <Card.Title style={styles.text}>
        <Image
          style={styles.avatar} borderRadius={50}
          source={{ uri: user.user.avatar_url }} />{user.user.login}</Card.Title>
      <Card.Divider />
      <Card>
        <Text>{user.user.bio}</Text>
        <Card.Divider />
        <Text><Image source={{ uri: email }} />{user.user.email} </Text>
        <Card.Divider />
      </Card>
    </Card>
  )
}