import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../settings/colors";
import ProfileImageBadge from "../components/ProfileImageBadge";
import CalendarIcon from "../components/icons/CalendarIcon";
import PeopleIcon from "../components/icons/PeopleIcon";
import PartyIcon from "../components/icons/PartyIcon";
import { profileData } from "../screens/data";
import CustomButton from "./CustomButton";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={profileData.backgroundImage}
        style={styles.backgroundImage}
      />
      <View style={styles.avatarContainer}>
        <ProfileImageBadge big />
        <CustomButton title="Follow" />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.username}>{profileData.username}</Text>
        <Text style={styles.usertag}>{profileData.usertag}</Text>
        <Text style={styles.description}>{profileData.description}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoElement}>
          <CalendarIcon />
          <Text style={styles.infoText}>Joined {profileData.created_at}</Text>
        </View>
        <View style={styles.infoElement}>
          <PeopleIcon />
          <Text style={styles.infoText}>{profileData.followers} followers</Text>
        </View>
        <View style={styles.infoElement}>
          <PartyIcon />
          <Text style={styles.infoText}>{profileData.parties} parties</Text>
        </View>
      </View>
      <View style={styles.separator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },

  infoElement: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoText: {
    fontWeight: "bold",
    fontSize: 13,
  },

  backgroundImage: {
    width: "100%",
    height: 140,
  },

  avatarContainer: {
    marginTop: -30,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 22,
  },

  usertag: {
    color: colors.secondaryTextColor,
  },

  nameContainer: {
    paddingHorizontal: 10,
  },

  description: {
    lineHeight: 18,
    textAlign: "justify",
    marginTop: 10,
  },

  separator: {
    borderBottomColor: colors.separatorColor,
    borderBottomWidth: 1,
    marginTop: 10,
  },
});
