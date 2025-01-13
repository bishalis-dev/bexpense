import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import CustomTopBar from '@/components/CustomTopBar';
import CustomBottomBar from '@/components/CustomBottomBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: '#ccc',
        header: () => <CustomTopBar />, // Custom Top Bar
      }}
      tabBar={(props) => <CustomBottomBar {...props} />} // Custom Bottom Bar
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Homes',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size || 24} />
          ),
        }}
      />
      {/* Transaction Tab */}
      <Tabs.Screen
        name="transaction"
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="exchange" color={color} size={size || 24} />
          ),
        }}
      />
      {/* categories Tab */}
      <Tabs.Screen
        name="categories"
        options={{
          tabBarLabel: "Accounts",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="folder" color={color} size={size || 24} />
          ),
        }}
      />
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size || 24} />
          ),
        }}
      />
    </Tabs>
  );
}
