import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";

export default function RegisterScreen({ navigation }) {
  const goToLogin = () => navigation.navigate("Login Screen");

  return (
    <View style={styles.centerContainer}>
      <View style={styles.buttonContainer}>
        <CustomButton title="Iniciar sesión" action={goToLogin} width={260} />
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
  buttonContainer: {
    marginTop: 16,
  },
});
