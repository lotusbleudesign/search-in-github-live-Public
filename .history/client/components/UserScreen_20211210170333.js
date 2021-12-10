import * as React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button, Image, StatusBar } from 'react-native';


export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  return (
    <Text>{user}</Text>
  )
}