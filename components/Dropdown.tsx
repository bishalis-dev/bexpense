import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  Pressable,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface DropdownProps {
  options: string[]; // Array of dropdown options
  selected: string; // Currently selected item
  onSelect: (item: string) => void; // Callback when an item is selected
  placeholder?: string; // Optional placeholder for the dropdown
}

export default function Dropdown({
  options,
  selected,
  onSelect,
  placeholder = 'Select',
}: DropdownProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (item: string) => {
    onSelect(item); // Call the parent onSelect callback
    setDropdownVisible(false); // Close the dropdown
  };

  return (
    <View>
      {/* Trigger to open dropdown */}
      <Pressable style={styles.dropdownTrigger} onPress={() => setDropdownVisible(true)}>
        <FontAwesome name="chevron-down" size={16} color="#8A2BE2" />
        <Text style={styles.selectedText}>{selected || placeholder}</Text>
      </Pressable>

      {/* Modal for dropdown */}
      <Modal
        visible={dropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)} // Handle back button on Android
      >
        <TouchableWithoutFeedback onPress={() => setDropdownVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Pressable
                    style={[
                      styles.optionItem,
                      item === selected && styles.activeOptionItem,
                    ]}
                    onPress={() => handleSelect(item)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        item === selected && styles.activeOptionText,
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF3E8',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#8A2BE2',
  },
  selectedText: {
    marginLeft: 5,
    fontSize: 13.4,
    color: '#000',
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '50%',
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  activeOptionItem: {
    backgroundColor: '#8A2BE2',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  activeOptionText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
