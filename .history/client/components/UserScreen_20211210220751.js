import * as React from 'react';
import { Text, Image, View, StatusBar } from 'react-native';
import styles from '../stylesheet/stylesheet';
import { Card } from 'react-native-elements'

export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  const repos = route.params.repos;
  console.log(user, repos);
  //console.log(" ==> ", user, user.user.avatar_url)
  return (

    <Card>
      <Card.Title style={styles.text}>
        <Image
          style={styles.avatar} borderRadius={50}
          source={{ uri: user.user.avatar_url }} /> {user.user.login}</Card.Title>
      <Card.Divider />
      <Text>{user.user.bio}</Text>
      <Text>Followers : {user.user.followers}  | Following : {user.user.following}</Text>
      <Card.Title style={styles.text}>
        Repos : {repos._count.repos}</Card.Title>
      <Card.Divider />
      {
        repos.repos.map((repo, index) => {
          return (
            <View key={index} >
              <Text>{repo.name}</Text>
            </View>
          )
        })
      }
    </Card>

  )
}