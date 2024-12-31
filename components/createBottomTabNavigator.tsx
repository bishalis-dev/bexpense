import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '@/screens/HomeScreen'; // Replace with your actual screen component
import TransactionScreen from '@/screens/TransactionScreen'; // Replace with your actual screen component
import BudgetScreen from '@/screens/BudgetScreen'; // Replace with your actual screen component
import ProfileScreen from '@/screens/ProfileScreen'; // Replace with your actual screen component

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#FFF', // Adjust the background color of the bottom tab bar
          height: 70, // Height for better visibility
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: 'home' | 'exchange' | 'pie-chart' | 'user' = 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Transaction') {
            iconName = 'exchange';
          } else if (route.name === 'Budget') {
            iconName = 'pie-chart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <FontAwesome name={iconName} size={focused ? 26 : 24} color={color} />;
        },
        tabBarActiveTintColor: '#8A2BE2', // Active tab icon color
        tabBarInactiveTintColor: '#B8B8B8', // Inactive tab icon color
        tabBarLabelStyle: {
          fontSize: 12, // Font size for tab labels
          marginBottom: 5, // Space below the icons
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{ headerShown: false, tabBarLabel: 'Transaction' }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetScreen}
        options={{ headerShown: false, tabBarLabel: 'Budget' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
