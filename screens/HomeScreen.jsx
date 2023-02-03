import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../settings/colors";
import { listData } from "./data";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { AntDesign } from "@expo/vector-icons";
import PostList from "../components/PostList";
import PostService from "../services/PostService";

export default function HomeScreen({ navigation }) {
  const goToNewPost = () => navigation.navigate("New Post");

  const [data, setData] = useState([]);

  useEffect(() => {
    PostService.getAllPosts().then((response) => {
      setData([...response.data]);
    });
  }, []);

  return (
    <View style={styles.container}>
      <PostList data={data} navigation={navigation} />
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
