import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PressableGroup from "./PressableGroup";
import { TransactionOptions } from "@/data/TransactionOptions";

interface TransactionBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; amount: number; type: string }) => void;
}

export default function TransactionBottomSheet({
  visible,
  onClose,
  onSubmit,
}: TransactionBottomSheetProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income"); // Default to income
  const handleSelection = (selectedItem: string) => {
    Alert.alert("Selected Item", `You selected: ${selectedItem}`);
  };

  const handleSave = () => {
    if (!title || !amount) {
      alert("Please fill in all fields");
      return;
    }
    onSubmit({ title, amount: parseFloat(amount), type });
    onClose(); // Close bottom sheet after saving
    setTitle("");
    setAmount("");
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        <Text style={styles.title}>Add Transaction</Text>

        <View style={[
            { flex:1, flexDirection: "column", justifyContent: "center", marginBottom: 20, gap: 7 },
        ]}>
          <Text style={styles.fieldTitle}>Select an Option</Text>
          <PressableGroup
            items={TransactionOptions}
            onSelect={handleSelection}
            // initialSelectedId="2" // Optional: Set the initially selected item
          />
        </View>

        {/* Transaction Title */}
        <TextInput
          placeholder="Transaction Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        {/* Transaction Amount */}
        <TextInput
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />

        {/* Save Button */}
        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  fieldTitle:{
    fontSize: 14,
    fontWeight: "bold",
    // marginBottom: 40,
    textAlign: "left",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FFF9F0",
    // padding: 20,
  },
  bottomSheet: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    paddingBottom: 40,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: "#CCC",
    borderRadius: 2.5,
    alignSelf: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    marginBottom: 20,
    paddingVertical: 5,
    fontSize: 16,
  },
//   typeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   typeButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#CCC",
//     borderRadius: 5,
//   },
  activeType: {
    backgroundColor: "#E0E0E0",
    borderColor: "#8A2BE2",
  },
  typeText: {
    marginLeft: 10,
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: "#8A2BE2",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
