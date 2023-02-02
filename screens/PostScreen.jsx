import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../settings/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import DotsIcons from "../components/icons/DotsIcons";
import ProfileImageBadge from "../components/ProfileImageBadge";
import { postData } from "./data";
import PostEngagementInfo from "../components/PostEngagementInfo";

export default function PostScreen({ navigation }) {
  const goToProfileScreen = () => navigation.navigate("Profile Screen");
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.flexRow} onPress={goToProfileScreen}>
          <ProfileImageBadge />
          <View>
            <Text style={styles.postUsername}>{postData.user.username}</Text>
            <Text style={styles.postUsertag}>{postData.user.usertag}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <DotsIcons />
        </TouchableOpacity>
      </View>
      <View style={styles.postContentContainer}>
        <Text style={styles.postDescription}>{postData.description}</Text>
      </View>

      {/* ENGAGEMENT DATA */}
      <View style={styles.postEngagementContainer}>
        <PostEngagementInfo item={postData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
  },

  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },

  flexRow: {
    flexDirection: "row",
  },

  postUsername: {
    fontWeight: "bold",
  },
  postUsertag: {
    color: colors.secondaryTextColor,
  },

  postContentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.separatorColor,
  },

  postDescription: {
    textAlign: "justify",
    fontSize: 18,
  },

  postEngagementContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.separatorColor,
  },
});
