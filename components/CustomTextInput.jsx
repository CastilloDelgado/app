import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import colors from "../settings/colors";

export default function CustomTextInput({
  title = "",
  placeholder = "",
  value = "",
  textContentType = "text",
  autoCapitalize = "none",
  secureTextEntry = false,
  width = null,
  onChangeText = () =>
    console.log(`You need to add an action for the "${title}" button`),
}) {
  return (
    <View style={[styles.inputContainer, { width }]}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        textContentType={textContentType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 14,
  },
  title: {
    fontWeight: "bold",
  },
  textInput: {
    marginTop: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.inputBackgroundColor,
    borderColor: colors.inputBorderColor,
    borderWidth: 2,
    borderRadius: 6,
  },
});
