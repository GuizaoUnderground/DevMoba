// app/_layout.tsx
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Redirect, Stack, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider, TaskProvider, useAuthContext } from "@/src/hooks";

const InitialLayout = () => {
  const { isAuthenticated } = useAuthContext();
  const segments = useSegments();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  // Isso é apenas para que o hook `useAuthContext` force a navegação
  // A navegação real é tratada dentro do AuthContext.
  if (!isAuthenticated && segments[0] !== "(auth)") {
    return <Redirect href="/(auth)/login" />;
  }
  if (isAuthenticated && segments[0] === "(auth)") {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <TaskProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="task-details" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </TaskProvider>
  );
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}
