import { StyleSheet } from "react-native";
import React from "react";
import colors from "../settings/colors";
import { listData } from "./data";
import PostList from "../components/PostList";
import ProfileHeader from "../components/ProfileHeader";

export default function ProfileScreen({ navigation }) {
  return (
    <PostList data={listData} navigation={navigation} header={ProfileHeader} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
  },
});
