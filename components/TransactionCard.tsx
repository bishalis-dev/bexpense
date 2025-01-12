import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export interface TransactionCardProps {
  id: string;
  title: string;
  category: string[]; // Array of categories
  datetime: string; // Date and time as a string
  type: 'income' | 'expense' | 'transfer'; // Transaction type
  amount: number; // Transaction amount
  user?: string; // Optional user associated with the transaction
}

export default function TransactionCard({
  id,
  title,
  category,
  datetime,
  type,
  amount,
  user,
}: TransactionCardProps) {
  const getTypeIcon = (): { icon: 'arrow-down' | 'arrow-up' | 'exchange' | 'question-circle'; color: string } => {
    switch (type) {
      case 'income':
        return { icon: 'arrow-down', color: '#4CAF50' }; // Green for income
      case 'expense':
        return { icon: 'arrow-up', color: '#F44336' }; // Red for expense
      case 'transfer':
        return { icon: 'exchange', color: '#2196F3' }; // Blue for transfer
      default:
        return { icon: 'question-circle', color: '#CCC' };
    }
  };

  const { icon, color } = getTypeIcon();

  return (
    <View style={styles.card}>
      {/* Left Section: Icon */}
      <FontAwesome name={icon} size={24} color={color} style={styles.icon} />

      {/* Middle Section: Details */}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>
          {category.join(', ')} {/* Join array items into a comma-separated string */}
        </Text>
        <Text style={styles.datetime}>{datetime}</Text>
        {user && <Text style={styles.user}>User: {user}</Text>}
      </View>

      {/* Right Section: Amount */}
      <Text style={[styles.amount, { color }]}>
        {type === 'income' ? `+ $${amount}` : `- $${amount}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  category: {
    fontSize: 14,
    color: '#888',
  },
  datetime: {
    fontSize: 12,
    color: '#AAA',
  },
  user: {
    fontSize: 12,
    color: '#555',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
