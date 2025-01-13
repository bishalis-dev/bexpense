import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface IconPickerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (icon: keyof typeof FontAwesome.glyphMap) => void;
  selectedIcon?: keyof typeof FontAwesome.glyphMap;
}

const iconList: (keyof typeof FontAwesome.glyphMap)[] = [
  "shopping-basket",
  "cutlery",
  "plane",
  "car",
  "home",
  "user",
  "heart",
  "gift",
  "money",
  "credit-card",
  "book",
  "briefcase",
  "coffee",
  "cutlery",
  "bicycle",
  "film",
  "arrow-up",
  "arrow-down"
];

export default function IconPicker({
  visible,
  onClose,
  onSelect,
  selectedIcon,
}: IconPickerProps) {
  const [currentIcon, setCurrentIcon] = useState(selectedIcon || iconList[0]);

  const handleSelect = (icon: keyof typeof FontAwesome.glyphMap) => {
    setCurrentIcon(icon);
    onSelect(icon);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Select an Icon</Text>
          <FlatList
            data={iconList}
            numColumns={4}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.iconContainer,
                  item === currentIcon && styles.selectedIcon,
                ]}
                onPress={() => handleSelect(item)}
              >
                <FontAwesome
                  name={item}
                  size={30}
                  color={item === currentIcon ? "#FFF" : "#8A2BE2"}
                />
              </Pressable>
            )}
          />
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFF",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  iconContainer: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedIcon: {
    backgroundColor: "#8A2BE2",
    borderColor: "#6A1BB1",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#8A2BE2",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
