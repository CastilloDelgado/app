import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import ProfileImageBadge from "./ProfileImageBadge";
import { TouchableOpacity } from "react-native-gesture-handler";
import PostEngagementInfo from "./PostEngagementInfo";
import colors from "../settings/colors";
import { formatDistanceToNowStrict } from "date-fns";
import ImageSlider from "./ImageSlider";
import prueba1 from "../assets/prueba1.jpeg";
import prueba2 from "../assets/prueba2.jpeg";
import prueba3 from "../assets/prueba3.jpeg";

export default function PostItem({ item, navigation }) {
  const goToProfile = (profileId) =>
    navigation.navigate("Profile Screen", {
      profileId: profileId,
    });
  const goToPostScreen = (postId) =>
    navigation.navigate("Post Screen", { postId });

  return (
    <View>
      <ImageSlider images={[prueba1, prueba2, prueba3]} />
      <View style={styles.smallPostContainer}>
        <Pressable onPress={() => goToProfile(item?.user?.id)}>
          <ProfileImageBadge image={item?.user?.avatar} />
        </Pressable>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            style={[styles.flexRow, styles.smallPostUserInfoContainer]}
            onPress={() => goToProfile(item?.user?.id)}
          >
            <Text numberOfLines={1} style={styles.smallPostName}>
              {item.user?.name}
            </Text>
            <Text numberOfLines={1} style={styles.usertag}>
              {`@${item.user?.usertag}`}
            </Text>
            <Text>&middot; </Text>
            <Text numberOfLines={1} style={styles.timestamp}>
              {formatDistanceToNowStrict(new Date(item.created_at))}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToPostScreen(item.id)}>
            <Text style={styles.smallPostTitle}>{item.title}</Text>
            <Text style={styles.smallPostDescription}>{item.description}</Text>
          </TouchableOpacity>

          {/* ENGAGEMENT DATA */}
          <PostEngagementInfo item={item} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  smallPostContainer: {
    flexDirection: "row",
    paddingTop: 12,
    paddingBottom: 8,
    paddingHorizontal: 12,
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
