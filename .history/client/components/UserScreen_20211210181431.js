import * as React from 'react';
import { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../stylesheet/stylesheet';
import { Card, Image, ListItem, Button, Icon } from 'react-native-elements'

export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  console.log(user);
  console.log(" ==> ", user, user.user.avatar_url)
  return (

    <Card>
      <Card.Title style={styles.text}>{user.user.login}</Card.Title>
      <Card.Divider />
      <Card.Image source={require({ avatar_url })}>
    </Card>
  )
}