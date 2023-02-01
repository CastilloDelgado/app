import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function ProfileImageBadge() {
  return (
    <Image
      style={styles.avatar}
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 42,
    width: 42,
    marginRight: 8,
    borderRadius: 21,
  },
});
