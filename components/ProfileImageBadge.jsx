import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../settings/colors";

export default function ProfileImageBadge({ big }) {
  return (
    <Image
      style={[
        styles.avatar,
        {
          height: big ? 80 : 42,
          width: big ? 80 : 42,
          borderRadius: big ? 40 : 21,
          borderColor: big ? colors.profileImageBadgeBorder : null,
          borderWidth: big ? 3 : null,
        },
      ]}
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginRight: 8,
  },
});
