import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Dropdown from '@/components/Dropdown';
import { months } from '@/data/Months';

export default function CustomTopBar() {
  const [currentMonth, setCurrentMonth] = useState(months[new Date().getMonth()]);

  // Example notification count (replace with dynamic value)
  const notificationCount = 5;

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual image URL
        style={styles.profilePic}
      />

      {/* Reusable Dropdown for Month Selection */}
      <Dropdown
        options={months}
        selected={currentMonth}
        onSelect={(month) => setCurrentMonth(month)}
      />

      {/* Notification Icon with Badge */}
      <View style={styles.notificationContainer}>
        <FontAwesome name="bell" size={24} color="#8A2BE2" />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </View>
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
});
