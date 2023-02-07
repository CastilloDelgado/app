import { View, StyleSheet, Button, Text, Platform } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import PostService from "../services/PostService";
import CustomActivityIndicator from "./CustomActivityIndicator";

export default function PostForm({ form, setForm }) {
  const [loading, setLoading] = useState(false);

  const handleTextChange = (id, text) => {
    setForm({
      ...form,
      [id]: text,
    });
  };

  const handleCreatePost = () => {
    setLoading(true);
    PostService.createPost(form)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.response.data))
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.formContainer}>
      {loading ? (
        <CustomActivityIndicator alwaysOn />
      ) : (
        <>
          <CustomTextInput
            title="Titulo"
            placeholder="Titulo de la fiesta"
            onChangeText={(text) => handleTextChange("title", text)}
            value={form["title"]}
          />
          <CustomTextInput
            title="Descripción"
            placeholder="Descripción de la fiesta"
            onChangeText={(text) => handleTextChange("description", text)}
            value={form["description"]}
          />
          <CustomTextInput
            title="Locación"
            placeholder="Lugar de la fiesta"
            onChangeText={(text) => handleTextChange("location", text)}
            value={form["location"]}
          />

          <CustomTextInput
            title="Fecha"
            placeholder="Ingresa la fecha de la fiesta"
            onChangeText={(text) => handleTextChange("date", text)}
            value={form["date"]}
          />

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Crear post"
              width={200}
              marginTop={30}
              action={handleCreatePost}
            />
          </View>
        </>
      )}
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
