import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '@/components/Card';
import TabsSection from '@/components/TabSection';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Total Balance */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Total Available Balance</Text>
        <Text style={styles.balanceAmount}>$9,400</Text>
      </View>

      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        <Card title="Receivable" amount="$5,000" icon="arrow-down" color="#4CAF50" />
        <Card title="Payable" amount="$1,200" icon="arrow-up" color="#F44336" />
        <Card title="Expenses" amount="$2,500" icon="shopping-cart" color="#2196F3" />
        <Card title="Income" amount="$7,800" icon="money" color="#FFC107" />
      </View>

      {/* Tabs Section */}
      <TabsSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
    padding: 20,
    width: '100%',
  },
  balanceContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#888',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  cardsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
