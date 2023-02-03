import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { AuthContext } from "../../context/AuthProvider";

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToRegister = () => navigation.navigate("Register Screen");

  return (
    <View style={styles.centerContainer}>
      <View>
        <CustomTextInput
          title="Correo electrónico"
          placeholder="Ingresa tu correo electrónico"
          textContentType="emailAddress"
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
          width={260}
        />
        <CustomTextInput
          title="Contraseña"
          placeholder="Ingresa tu contraseña"
          textContentType="password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
          width={260}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Iniciar sesión"
            action={() => login(email, password)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Registrate" action={goToRegister} />
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
  buttonContainer: {
    marginTop: 16,
  },
});
