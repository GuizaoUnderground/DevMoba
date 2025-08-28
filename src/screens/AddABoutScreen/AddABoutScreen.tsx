import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PageTemplate } from '@/src/templates';
import React from 'react';
import { StyleSheet } from 'react-native';

export const AboutScreen: React.FC = () => {
  return (
    <PageTemplate
      title=""
      scrollable
      keyboardAvoiding={false}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Sobre o App</ThemedText>
        <ThemedText style={styles.text}>
          Este aplicativo foi desenvolvido para ajudar você a organizar suas tarefas
          diárias de forma simples e eficiente.
        </ThemedText>
        <ThemedText style={styles.text}>
          Com ele, você pode criar, visualizar e acompanhar suas atividades com facilidade.
        </ThemedText>
        <ThemedText style={styles.text}>
          Versão: 1.0.0
        </ThemedText>
        <ThemedText style={styles.text}>
          Desenvolvido por: Sua Empresa ou Nome
        </ThemedText>
      </ThemedView>
    </PageTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 12,
  },
});
