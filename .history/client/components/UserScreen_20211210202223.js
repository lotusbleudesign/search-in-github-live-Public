import * as React from 'react';
import { Text, Image } from 'react-native';
import styles from '../stylesheet/stylesheet';
import { Card } from 'react-native-elements'

export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  console.log(user);
  //console.log(" ==> ", user, user.user.avatar_url)
  return (

    <Card>
      <Card.Title style={styles.text}>
        <Image
          style={styles.avatar} borderRadius={50}
          source={{ uri: user.user.avatar_url }} /> {user.user.login}</Card.Title>
      <Card.Divider />
      <Text>{user.user.bio}</Text>
      <Card.Divider />
      <Text> Followers : {user.user.followers}  | Following : {user.user.following}</Text>
      <Card.Divider />
      <Text>Repos : </Text>
    </Card>
  )
}