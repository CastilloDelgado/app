import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import ProfileImageBadge from "./ProfileImageBadge";
import { TouchableOpacity } from "react-native-gesture-handler";
import PostEngagementInfo from "./PostEngagementInfo";
import colors from "../settings/colors";
import { formatDistanceToNowStrict } from "date-fns";

export default function PostItem({ item, navigation }) {
  const goToProfile = () => navigation.navigate("Profile Screen");
  const goToPostScreen = () => navigation.navigate("Post Screen");

  return (
    <View style={styles.smallPostContainer}>
      <Pressable onPress={goToProfile}>
        <ProfileImageBadge image={item?.user?.avatar} />
      </Pressable>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          style={[styles.flexRow, styles.smallPostUserInfoContainer]}
          onPress={goToProfile}
        >
          <Text numberOfLines={1} style={styles.smallPostName}>
            {item.user.name}
          </Text>
          <Text numberOfLines={1} style={styles.usertag}>
            {`@${item.user.usertag}`}
          </Text>
          <Text>&middot; </Text>
          <Text numberOfLines={1} style={styles.timestamp}>
            {formatDistanceToNowStrict(new Date(item.created_at))}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flexRow} onPress={goToPostScreen}>
          <Text style={styles.smallPostTitle}>{item.title}</Text>
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
    backgroundColor: colors.appBackgroundColor,
  },

  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  smallPostName: {
    fontWeight: "bold",
    marginRight: 6,
  },

  smallPostTitle: {
    fontWeight: "bold",
    marginRight: 6,
    textAlign: "justify",
  },

  smallPostUserInfoContainer: {
    marginBottom: 6,
  },

  usertag: {
    color: colors.secondaryTextColor,
    marginRight: 6,
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
