import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  Alert,
} from "react-native";
import React from "react";
import colors from "../settings/colors";
import { listData } from "./data";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const goToProfile = () => navigation.navigate("Profile Screen");
  const goToPostScreen = () => navigation.navigate("Post Screen");
  const goToNewPost = () => navigation.navigate("New Post");

  const renderItem = ({ item }) => (
    <View style={styles.smallPostContainer}>
      <Pressable onPress={goToProfile}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
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
        <View style={styles.postEngagement}>
          <TouchableOpacity style={styles.flexRow}>
            <SimpleLineIcons
              name="people"
              size={22}
              color={colors.reactionIconColor}
              style={styles.iconStyle}
            />
            <Text>{item.reaction_count}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, { marginLeft: 12 }]}>
            <EvilIcons
              name="comment"
              size={26}
              color={colors.reactionIconColor}
              style={styles.iconStyle}
            />
            <Text>{item.comments_count}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, { marginLeft: 12 }]}>
            <Ionicons
              name="share-outline"
              size={22}
              color={colors.reactionIconColor}
              style={styles.iconStyle}
            />
            <Text>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={styles.smallPostSeparator}></View>
        )}
      />
      <Pressable style={styles.addIcon} onPress={goToNewPost}>
        <AntDesign name="plus" size={24} color={colors.addIconColor} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
  },

  smallPostContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: colors.smallPostBorderColor,
  },

  avatar: {
    height: 42,
    width: 42,
    marginRight: 8,
    borderRadius: 21,
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

  postEngagement: {
    flexDirection: "row",
    marginTop: 4,
  },

  iconStyle: {
    marginRight: 4,
  },

  smallPostSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.separatorColor,
  },

  addIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.addIconBackgroundColor,
    position: "absolute",
    bottom: 20,
    right: 12,
  },
});
