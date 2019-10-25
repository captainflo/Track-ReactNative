import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <MaterialCommunityIcons
          style={styles.title}
          name="account-circle"
          size={40}
        />
        <Text h3 style={styles.title}>
          {headerText}
        </Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 16,
    color: "red"
  },
  title: {
    textAlign: "center"
  }
});

export default AuthForm;
