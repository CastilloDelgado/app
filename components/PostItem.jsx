import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import ProfileImageBadge from "./ProfileImageBadge";
import { TouchableOpacity } from "react-native-gesture-handler";
import PostEngagementInfo from "./PostEngagementInfo";
import colors from "../settings/colors";

export default function PostItem({ item, navigation }) {
  const goToProfile = () => navigation.navigate("Profile Screen");
  const goToPostScreen = () => navigation.navigate("Post Screen");

  return (
    <View style={styles.smallPostContainer}>
      <Pressable onPress={goToProfile}>
        <ProfileImageBadge />
      </Pressable>
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.flexRow} onPress={goToProfile}>
          <Text numberOfLines={1} style={styles.smallPostTitle}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styles.usertag}>
            {item.usertag}
          </Text>
          <Text>&middot; </Text>
          <Text numberOfLines={1} style={styles.timestamp}>
            {item.timestamp}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallPostContent}
          onPress={goToPostScreen}
        >
          <Text style={styles.smallPostDescription}>{item.description}</Text>
        </TouchableOpacity>

        {/* ENGAGEMENT DATA */}
        <PostEngagementInfo item={item} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  smallPostContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: colors.smallPostBorderColor,
  },

  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  smallPostTitle: {
    fontWeight: "bold",
  },

  usertag: {
    color: colors.secondaryTextColor,
  },

  timestamp: {
    color: colors.secondaryTextColor,
  },

  smallPostContent: {
    marginTop: 4,
  },

  infoContainer: {
    flex: 1,
  },

  smallPostDescription: {
    textAlign: "justify",
    lineHeight: 20,
  },
});
