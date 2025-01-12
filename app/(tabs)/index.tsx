import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "@/components/Card";
import TabsSection from "@/components/TabSection";
import TransactionCard, {
  TransactionCardProps,
} from "@/components/TransactionCard";
import { Button } from "react-native-elements";
import PrimaryButton from "@/components/Button";
import TransactionModal from "@/components/TransactionModal";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
type TransactionType = "transfer" | "income" | "expense";

const transactions: TransactionCardProps[] = [
  {
    id: "1",
    title: "Salary",
    category: ["Work", "Monthly"],
    datetime: "2025-01-11 10:30 AM",
    type: "income",
    amount: 5000,
    user: "John Doe",
  },
  {
    id: "2",
    title: "Groceries",
    category: ["Shopping", "Daily Needs"],
    datetime: "2025-01-10 6:45 PM",
    type: "expense",
    amount: 150,
  },
  {
    id: "3",
    title: "Transfer to Savings",
    category: ["Savings", "Bank"],
    datetime: "2025-01-09 4:20 PM",
    type: "transfer",
    amount: 1000,
  },
];
export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTransaction = (data: {
    title: string;
    amount: number;
    type: string;
  }) => {
    console.log("Transaction Added:", data);
    // Add logic to save the transaction to state or backend
  };
  return (
    <View style={styles.container}>
      {/* Total Balance Section */}
      <View style={styles.balanceContainer}>
        <View>
          <Text style={styles.balanceTitle}>Total Available Balance</Text>
          <Text style={styles.balanceAmount}>$9,400</Text>
        </View>
        <View>
          <PrimaryButton
            title="Add Transaction"
            onPress={() => setModalVisible(true)}
            style={{
              backgroundColor: "#2196F3",
              paddingVertical: 10,
              paddingHorizontal: 17,
              borderRadius: 13,
            }}
            textStyle={{ fontSize: 12 }}
          />
          <TransactionModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onSubmit={handleAddTransaction}
          />
        </View>
      </View>

      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        <View style={styles.row}>
          <Card
            title="Receivable"
            amount="$5,000"
            icon="arrow-down"
            color="#4CAF50"
          />
          <Card
            title="Payable"
            amount="$1,200"
            icon="arrow-up"
            color="#F44336"
          />
        </View>
        <View style={styles.row}>
          <Card
            title="Expenses"
            amount="$2,500"
            icon="shopping-cart"
            color="#2196F3"
          />
          <Card title="Income" amount="$7,800" icon="money" color="#FFC107" />
        </View>
      </View>

      {/* Tabs Section */}

      <TabsSection />
      {/* <View> */}
      <ScrollView style={styles.container}>
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id} {...transaction} />
        ))}
      </ScrollView>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9F0",
    padding: 8,
  },
  balanceContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  balanceTitle: {
    fontSize: 15,
    color: "#888",
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#443",
  },
  cardsContainer: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 8,
  },
});
