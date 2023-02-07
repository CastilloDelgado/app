import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function CustomTextButton({ title, action }) {
  return (
    <Pressable style={styles.button} onPress={action}>
      <Text style={styles.text}>{title || ""}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "red",
  },
  text: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
