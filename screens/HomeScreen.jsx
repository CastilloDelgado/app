import { View, Text, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  const redirectTo = (screenName) => navigation.navigate(screenName);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="New Post" onPress={() => redirectTo("New Post")} />
      <Button title="Post Screen" onPress={() => redirectTo("Post Screen")} />
      <Button
        title="Profile Screen"
        onPress={() => redirectTo("Profile Screen")}
      />
    </View>
  );
}
