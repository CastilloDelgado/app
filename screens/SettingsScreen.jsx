import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../context/AuthProvider";

export default function SettingsScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.centerContainer}>
      <CustomButton title="Cerrar sesión" action={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
