import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import PostItem from "./PostItem";
import colors from "../settings/colors";

export default function PostList({
  data,
  navigation,
  header,
  refreshing,
  handleRefresh,
}) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <PostItem navigation={navigation} item={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View style={styles.smallPostSeparator}></View>
      )}
      ListHeaderComponent={header ? header : null}
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
}

const styles = StyleSheet.create({
  smallPostSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.separatorColor,
  },
});
