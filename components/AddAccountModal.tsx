import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import IconPicker from "@/components/IconPicker";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./Button";

interface AddAccountModalProps {
  visible: boolean;
  onClose: () => {
    // close model
    
  };
  onSubmit: (data: {
    name: string;
    icon: keyof typeof FontAwesome.glyphMap;
    initialFunds: number;
  }) => void;
}

export default function AddAccountModal({
  visible,
  onClose,
  onSubmit,
}: AddAccountModalProps) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState<keyof typeof FontAwesome.glyphMap>(
    "shopping-basket"
  );
  const [initialFunds, setInitialFunds] = useState("");
  const [showIconPicker, setShowIconPicker] = useState(false);

  const handleSave = () => {
    if (!name || !initialFunds) {
      alert("Please fill in all fields");
      return;
    }
    onSubmit({
      name,
      icon,
      initialFunds: parseFloat(initialFunds),
    });
    setName("");
    setIcon("shopping-basket");
    setInitialFunds("");
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Add New Account</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Account Name */}
            <Text style={styles.label}>Account Name</Text>
            <TextInput
              placeholder="e.g., Groceries"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

            {/* Initial Funds */}
            <Text style={styles.label}>Initial Funds</Text>
            <TextInput
              placeholder="e.g., 500"
              value={initialFunds}
              onChangeText={setInitialFunds}
              keyboardType="numeric"
              style={styles.input}
            />

            {/* Icon Picker */}
            <Text style={styles.label}>Select Icon</Text>
            <Pressable
              style={styles.iconPickerButton}
              onPress={() => setShowIconPicker(true)}
            >
              <FontAwesome name={icon} size={24} color="#8A2BE2" />
              <Text style={styles.iconPickerText}>Choose Icon</Text>
            </Pressable>
          </ScrollView>

          {/* Save Button */}
          {/* <Pressable style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Account</Text>
          </Pressable> */}
          <PrimaryButton title="Save Account" onPress={handleSave} style={
            {marginTop: 10, borderRadius: 20}
          }/>
          <SecondaryButton title="Cancel" onPress={onClose} style={
            {marginTop: 10}
          }/>
        </View>
      </View>

      {/* Icon Picker */}
      <IconPicker
        visible={showIconPicker}
        selectedIcon={icon}
        onClose={() => setShowIconPicker(false)}
        onSelect={(selectedIcon) => setIcon(selectedIcon)}
      />
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
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#FAFAFA",
  },
  iconPickerButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
  },
  iconPickerText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#8A2BE2",
  },
  saveButton: {
    backgroundColor: "#8A2BE2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
