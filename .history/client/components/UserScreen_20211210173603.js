import * as React from 'react';
import { useState } from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

const styles = require('../stylesheet/stylesheet');

export default function UserScreen({ navigation, route }) {

  const user = route.params.user;
  console.log(user);

  return (
    <ScrollView>
      <View
        style={{

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
      </View>
    </ScrollView>
  )
}