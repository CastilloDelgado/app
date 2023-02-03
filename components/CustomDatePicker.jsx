import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import colors from "../settings/colors";

export default function CustomDatePicker({ title }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputsContainer}>
        <View>
          <Text style={styles.inputTitle}>Día</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <Text style={styles.inputTitle}>Mes</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <Text style={styles.inputTitle}>Año</Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 14,
  },

  inputsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "bold",
  },
  inputTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    marginTop: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.inputBackgroundColor,
    borderColor: colors.inputBorderColor,
    borderWidth: 2,
    borderRadius: 6,
    width: 100,
    textAlign: "center",
  },
});
