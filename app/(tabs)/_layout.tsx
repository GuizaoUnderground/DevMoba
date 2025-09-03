// app/(tabs)/_layout.tsx
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useAuthContext } from "@/src/hooks/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { logout } = useAuthContext();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Ionicons
              name="log-out-outline"
              size={24}
              color={Colors[colorScheme ?? "light"].text}
            />
          </TouchableOpacity>
        ),
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Minhas Tarefas",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={focused ? 30 : 26}
              name={focused ? "checklist" : "list.bullet"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Nova Tarefa",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={focused ? 32 : 28}
              name={focused ? "plus.circle.fill" : "plus.circle"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
  },
});
