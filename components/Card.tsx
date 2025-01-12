import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface CardProps {
  title: string;
  amount: string;
  icon: keyof typeof FontAwesome.glyphMap;
  color: string;
}

export default function Card({ title, amount, icon, color }: CardProps) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <FontAwesome name={icon} size={24} color="#FFF" />
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    margin: 8,
    width: "50%",
    alignItems: "center",

  },
  title: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  amount: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
});
