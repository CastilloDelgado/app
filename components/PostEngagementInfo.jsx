import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import PeopleIcon from "./icons/PeopleIcon";
import CommentIcon from "./icons/CommentIcon";
import ShareIcon from "./icons/ShareIcon";

export default function PostEngagementInfo({ item }) {
  return (
    <View style={styles.postEngagement}>
      <TouchableOpacity style={styles.flexRow}>
        <PeopleIcon />
        <Text>{item.reaction_count}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flexRow, { marginLeft: 12 }]}>
        <CommentIcon />
        <Text>{item.comments_count}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flexRow, { marginLeft: 12 }]}>
        <ShareIcon />
        <Text>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  postEngagement: {
    flexDirection: "row",
    marginTop: 4,
    justifyContent: "space-around",
  },
});
