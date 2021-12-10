import * as React from 'react';
import { Text, View, StatusBar, ListItem } from 'react-native';

const styles = require('../stylesheet/stylesheet');
export default function ListUserScreen() {
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