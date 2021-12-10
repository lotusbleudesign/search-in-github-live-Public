import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Button, Image, StatusBar, ActivityIndicator } from 'react-native';
import { apiGithubGetUser, apiGithubGetUserRepos } from '../api/github';
import styles from '../stylesheet/stylesheet';

export default function SearchScreen({ navigation }) {
  const [searchUser, setsearchUser] = useState("");

  async function getUser() {
    navigation.navigate("UserScreen", { user: await apiGithubGetUser(searchUser), repos: await apiGithubGetUserRepos(searchUser) });
  }

  return (
    <View style={styles.screen}>
      <View style={styles.horizontal}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
      );

      <Image
        style={styles.tinyLogo}
        source={{ uri: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg' }}
      />
      <TextInput style={styles.input} onChangeText={setsearchUser} placeholder="search an user.."></TextInput>
      <Button
        onPress={() => getUser()}
        title="Search"
        color="#5f5b58"
      />
      <StatusBar style="auto" />
    </View >
  )
}