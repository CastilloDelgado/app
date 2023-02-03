import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../settings/colors";

export default function CustomButton({
  title,
  color = colors.followButton,
  fontColor = colors.followButtonText,
  width = null,
  marginTop = 0,
  marginBottom = 0,
  action,
}) {
  return (
    <TouchableOpacity
      onPress={action}
      style={[
        styles.followButton,
        {
          backgroundColor: color,
          width: width,
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
      ]}
    >
      <Text
        style={[
          styles.followButtonText,
          {
            color: fontColor,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  followButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },

  followButtonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
