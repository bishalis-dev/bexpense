import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CustomTopBar() {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual image URL
        style={styles.profilePic}
      />

      {/* Dropdown with Month */}
      <Pressable style={styles.dropdown}>
        <FontAwesome name="chevron-down" size={16} color="#8A2BE2" />
        <Text style={styles.monthText}>December</Text>
      </Pressable>

      {/* Notification Icon */}
      <FontAwesome name="bell" size={24} color="#8A2BE2" style={styles.notificationIcon} />
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
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
  monthText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  notificationIcon: {
    marginLeft: 10,
  },
});
