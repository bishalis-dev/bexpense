import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export interface AccountCardProps {
  id: string;
  name: string;
  icon: keyof typeof FontAwesome.glyphMap;
  createdAt: string;
  funds: number;
}

export default function AccountCard({
  name,
  icon,
  createdAt,
  funds,
}: AccountCardProps) {
  return (
    <View style={styles.card}>
      <FontAwesome name={icon} size={24} color="#8A2BE2" />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>Created on {createdAt}</Text>
      </View>
      <Text style={[styles.funds, funds === 0 && styles.noFunds]}>
        ${funds}
      </Text>
      <Pressable style={styles.menuButton}>
        <FontAwesome name="ellipsis-v" size={20} color="#CCC" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  funds: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  noFunds: {
    color: "#F44336",
  },
  menuButton: {
    marginLeft: 10,
  },
});
