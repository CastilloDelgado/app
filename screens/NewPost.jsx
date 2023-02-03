import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import colors from "../settings/colors";
import PostForm from "../components/PostForm";

export default function NewPost() {
  return (
    <View style={styles.container}>
      <PostForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
  },
});
