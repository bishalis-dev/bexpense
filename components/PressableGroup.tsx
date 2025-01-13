import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";

interface PressableGroupProps {
  items: { id: string; label: string }[]; // Array of items to render
  onSelect: (selectedItem: string) => void; // Callback for selected item
  initialSelectedId?: string; // Optional: initially selected item ID
}

export default function PressableGroup({
  items,
  onSelect,
  initialSelectedId,
}: PressableGroupProps) {
  const [selectedId, setSelectedOption] = useState(initialSelectedId || items[0]?.id);

  const handlePress = (id: string) => {
    setSelectedOption(id);
    onSelect(id);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {items.map((item) => (
        <Pressable
          key={item.id}
          style={[
            styles.button,
            selectedId === item.id && styles.activeButton,
          ]}
          onPress={() => handlePress(item.id)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedId === item.id && styles.activeButtonText,
            ]}
          >
            {item.label}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 23,
    borderRadius: 20,
    backgroundColor: "#EEE",
    borderWidth: 1,
    borderColor: "#CCC",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#8A2BE2",
    borderColor: "#6A1BB1",
  },
  buttonText: {
    fontSize: 12,
    color: "#333",
  },
  activeButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
