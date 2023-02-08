import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../context/AuthProvider";
import CustomTextInput from "../components/CustomTextInput";
import { ProfileService } from "../services/ProfileService";
import * as ImagePicker from "expo-image-picker";
import axios from "../helpers/axiosConfig";
import { SERVER_URL, STORAGE_SERVER_URL } from "../constants";

export default function SettingsScreen() {
  const { user, logout } = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(user.name || "");
  const [caption, setCaption] = useState(user.caption || "");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUrl(result.assets[0].uri);
      setImage(result);
    }
  };

  const handleUpdateProfile = () => {
    ProfileService.updateProfile(name, caption)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data.message));
  };

  const chooseImageToShow = () => {
    if (imageUrl) {
      return {
        uri: imageUrl,
      };
    }

    if (user.avatar) {
      return {
        uri: `${STORAGE_SERVER_URL}/${user.avatar}`,
      };
    }

    return "";
  };

  console.log(chooseImageToShow());

  const handleUpdateProfileImage = async () => {
    const uri =
      Platform.OS === "android"
        ? image.assets[0].uri
        : image.assets[0].uri.replace("file://", "");
    const filename = image.assets[0].uri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];
    const type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();
    formData.append("image", {
      uri,
      name: `image.${ext}`,
      type,
    });

    axios
      .post(`${SERVER_URL}/users/update_image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => console.log("Success", response.data))
      .catch((error) => console.log("Error", error.response.data.message));
  };

  return (
    <View style={styles.centerContainer}>
      <View style={styles.imagePickerContainer}>
        {/* Image picker */}
        <Pressable onPress={pickImage}>
          <View style={styles.imageContainer}>
            <Image source={{ ...chooseImageToShow() }} style={styles.image} />
          </View>
        </Pressable>
        <View style={styles.buttonContainer}>
          <Text style={styles.textMessage}>
            Presiona la imagen para cambiarla
          </Text>
          <CustomButton
            title="Actualizar imagen de perfil"
            action={handleUpdateProfileImage}
          />
        </View>
      </View>
      {/* Update Profile Form */}
      <View style={styles.formContainer}>
        <CustomTextInput
          title="Name"
          placeholder="Update your current name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <CustomTextInput
          title="Caption"
          placeholder="Update your current caption"
          value={caption}
          onChangeText={(text) => setCaption(text)}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Actualizar perfil"
            action={handleUpdateProfile}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Cerrar sesión" action={logout} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: "center",
  },

  textMessage: {
    marginBottom: 10,
    textDecorationLine: "underline",
    textAlign: "center",
  },

  imageContainer: {
    alignContent: "center",
    alignItems: "center",
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: "center",
    backgroundColor: "gray",
  },

  imagePickerContainer: {
    width: 300,
    alignItems: "center",
  },

  formContainer: {
    width: 300,
  },

  buttonContainer: {
    marginTop: 20,
  },
});
