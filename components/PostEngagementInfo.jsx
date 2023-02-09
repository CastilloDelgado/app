import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import PeopleIcon from "./icons/PeopleIcon";
import CommentIcon from "./icons/CommentIcon";
import AssistIcon from "./icons/AssistIcon";
import ReactionService from "../services/ReactionService";

export default function PostEngagementInfo({ item }) {
  const [assist, setAssist] = useState(false);

  const handleReaction = () => {
    ReactionService.addReaction(item.id)
      .then(() => {
        setAssist(true);
      })
      .catch((error) => console.log(error.response.data.message));
  };

  const handleRemoveReaction = () => {
    ReactionService.removeReaction(item.id)
      .then(() => {
        setAssist(false);
      })
      .catch((error) => console.log(error.response.data.message));
  };

  return (
    <View style={styles.postEngagement}>
      <TouchableOpacity style={styles.flexRow}>
        <PeopleIcon />
        <Text>{item.reaction_count || 0}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flexRow, { marginLeft: 12 }]}>
        <CommentIcon />
        <Text>{item.comments_count || 0}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.flexRow, { marginLeft: 12 }]}
        onPress={!assist ? handleReaction : handleRemoveReaction}
      >
        <AssistIcon />
        <Text>{`${!assist ? "¿" : "¡"}Asisitirás${!assist ? "?" : "!"}`}</Text>
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
    paddingTop: 6,
    justifyContent: "space-around",
  },
});
