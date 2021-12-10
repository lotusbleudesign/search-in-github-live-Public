import * as React from 'react';
import { useState } from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  console.log(user);

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30,
        }}

      >
        <Text>{user.login}</Text>
        <Image
          size={64}
          source={{ uri: user.avatar_url }}
          rounded
          icon={{ name: 'rowing' }}
          containerStyle={{ backgroundColor: '#00a7f7' }}
        />
        /View>
    </ScrollView>
  )
}