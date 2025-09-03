// src/screens/LoginScreen/LoginScreen.tsx
import { ThemedView } from "@/components/ThemedView";
import { useAuthContext } from "@/src/hooks/AuthContext";
import { LoginForm } from "@/src/organisms/LoginForm";
import { PageTemplate } from "@/src/templates";
import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";

export const LoginScreen: React.FC = () => {
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (username, password) => {
    setLoading(true);
    try {
      // Simulação de uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (username === "test" && password === "password") {
        login();
      } else {
        Alert.alert("Erro de Login", "Nome de usuário ou senha incorretos.");
      }
    } catch (error) {
      Alert.alert("Erro de Login", "Ocorreu um erro ao tentar fazer login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTemplate
      title="Bem-vindo"
      subtitle="Faça login para continuar"
      scrollable
      keyboardAvoiding
    >
      <ThemedView style={styles.container}>
        <LoginForm onSubmit={handleLogin} isLoading={loading} />
      </ThemedView>
    </PageTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
