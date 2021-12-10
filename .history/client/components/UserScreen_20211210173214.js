import * as React from 'react';
import { useState } from 'react';
import { Text, Avatar } from 'react-native';

export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  console.log(user);
  return (
    <ScrollView>
      <Text>{user.login}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30,
        }}

      ></View>
      <Avatar
        size={64}
        source={ }
        rounded
        icon={{ name: 'rowing' }}
        containerStyle={{ backgroundColor: '#00a7f7' }}
      />
    </ScrollView>
  )
}