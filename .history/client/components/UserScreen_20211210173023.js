import * as React from 'react';
import { useState } from 'react';
import { Text, Avatar } from 'react-native';

export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  console.log(user);
  return (
    <Text>Hello</Text>
    <Avatar
    size={64}
    rounded
    icon={{ name: 'rowing' }}
    containerStyle={{ backgroundColor: '#00a7f7' }}
  />
  )
}