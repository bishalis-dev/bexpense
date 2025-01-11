import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { months } from '@/data/Months';

export default function CustomTopBar() {
  const [currentMonth, setCurrentMonth] = useState(
    months[new Date().getMonth()] // Set current month as default
  );
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Example notification count (replace with dynamic value)
  const notificationCount = 5;

  const handleMonthSelect = (month: string) => {
    setCurrentMonth(month);
    setDropdownVisible(false); // Close dropdown after selection
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual image URL
        style={styles.profilePic}
      />

      {/* Dropdown with Month */}
      <Pressable
        style={styles.dropdown}
        onPress={() => setDropdownVisible(true)}
      >
        <FontAwesome name="chevron-down" size={16} color="#8A2BE2" />
        <Text style={styles.monthText}>{currentMonth}</Text>
      </Pressable>

      {/* Notification Icon with Badge */}
      <View style={styles.notificationContainer}>
        <FontAwesome name="bell" size={24} color="#8A2BE2" />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </View>

      {/* Modal for Month Dropdown */}
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
                data={months}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Pressable
                    style={[
                      styles.monthItem,
                      item === currentMonth && styles.activeMonthItem,
                    ]}
                    onPress={() => handleMonthSelect(item)}
                  >
                    <Text
                      style={[
                        styles.monthItemText,
                        item === currentMonth && styles.activeMonthText,
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF9F0', // Background color similar to the image
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8A2BE2', // Purple border
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF3E8',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
    borderColor: '#8A2BE2',
  },
  monthText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  notificationContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF0000', // Red badge color
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  notificationIcon: {
    marginLeft: 10,
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
  monthItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  activeMonthItem: {
    backgroundColor: '#8A2BE2',
    borderRadius: 5,
  },
  monthItemText: {
    fontSize: 16,
    color: '#333',
  },
  activeMonthText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
