import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import CustomTextInput from "./CustomTextInput";
import CustomDatePicker from "./CustomDatePicker";
import CustomButton from "./CustomButton";

export default function PostForm() {
  return (
    <View style={styles.formContainer}>
      <CustomTextInput title="Titulo" placeholder="Titulo de la fiesta" />
      <CustomTextInput
        title="Descripción"
        placeholder="Descripción de la fiesta"
      />
      <CustomTextInput title="Locación" placeholder="Lugar de la fiesta" />
      <CustomDatePicker title="Selecciona una fecha" />
      <View style={styles.buttonContainer}>
        <CustomButton title="Crear post" width={200} marginTop={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    alignItems: "center",
  },
});
