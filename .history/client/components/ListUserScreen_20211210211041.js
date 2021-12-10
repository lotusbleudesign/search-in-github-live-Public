import * as React from 'react';
import { Text, View, StatusBar, ListItem } from 'react-native';
import { apiGithubGetUser, apiGithubGetUserRepos } from '../api/github';

const styles = require('../stylesheet/stylesheet');
export default function ListUserScreen() {
  const user = route.params.user;
  const repos = route.params.repos;
  console.log(user, repos);

  return (
    <View style={styles.screen} >
      {/* <Text style={styles.text}>About</Text>
      <StatusBar style="auto" /> */}
      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>

    </View>
  )
}