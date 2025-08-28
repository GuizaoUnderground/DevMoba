// src/organisms/LoginForm/LoginForm.tsx
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/src/atoms/Button";
import { Input } from "@/src/atoms/Input";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

export interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  isLoading?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    onSubmit(username, password);
  };

  return (
    <ThemedView style={styles.container}>
      <Input
        label="Nome de Usuário"
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu nome de usuário"
        autoCapitalize="none"
        style={styles.input}
      />
      <Input
        label="Senha"
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry
        autoCapitalize="none"
        style={styles.input}
      />
      <Button
        title={isLoading ? "Entrando..." : "Entrar"}
        onPress={handlePress}
        disabled={isLoading}
        fullWidth
        style={styles.button}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#f8f9fa",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
