import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import AccountCard, { AccountCardProps } from "@/components/AccountCard";
import PrimaryButton from "@/components/Button";
import AddAccountModal from "@/components/AddAccountModal";

const dummyAccounts: AccountCardProps[] = [
  {
    id: "1",
    name: "Shopping",
    icon: "shopping-basket",
    createdAt: "2024-01-01",
    funds: 200,
  },
  {
    id: "2",
    name: "Food",
    icon: "cutlery",
    createdAt: "2024-01-05",
    funds: 50,
  },
  {
    id: "3",
    name: "Travel",
    icon: "plane",
    createdAt: "2024-01-10",
    funds: 0,
  },
];

export default function CategoriesScreen() {
  const [accounts, setAccounts] = useState(dummyAccounts);
  const [filter, setFilter] = useState("Last Created");
  const [showModal, setShowModal] = useState(false);
  const [newAccount, setNewAccount] = useState<
    Pick<AccountCardProps, "name" | "icon">
  >({
    name: "",
    icon: "shopping-basket",
  });

  const handleCreateAccount = () => {
    if (!newAccount.name) {
      alert("Please enter an account name.");
      return;
    }

    setAccounts((prev) => [
      {
        id: `${Date.now()}`,
        name: newAccount.name,
        icon: newAccount.icon,
        createdAt: new Date().toISOString().split("T")[0],
        funds: 0,
      },
      ...prev,
    ]);
    setShowModal(false);
    setNewAccount({ name: "", icon: "folder" });
  };

  return (
    <View style={styles.container}>
      {/* Filters Section */}
      <View style={styles.filters}>
        <ScrollView horizontal>
          {["Last Created", "Max Funds", "No Funds"].map((filterOption) => (
            <Pressable
              key={filterOption}
              style={[
                styles.filterButton,
                filter === filterOption && styles.activeFilterButton,
              ]}
              onPress={() => setFilter(filterOption)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  filter === filterOption && styles.activeFilterText,
                ]}
              >
                {filterOption}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <PrimaryButton
          title="Add Account"
          onPress={() => setShowModal(true)}
          style={{
            backgroundColor: "#8A2BE2",
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}
          textStyle={{ color: "#FFF", fontSize: 12, fontWeight: "bold" }}
        />
      </View>

      {/* Account List */}
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AccountCard {...item} />}
        contentContainerStyle={styles.accountList}
      />
      <AddAccountModal
        visible={showModal}
        onClose={async () => setShowModal(false)}
        onSubmit={handleCreateAccount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9F0",
    padding: 10,
  },
  filters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#EEE",
    marginHorizontal: 5,
  },
  activeFilterButton: {
    backgroundColor: "#8A2BE2",
  },
  filterButtonText: {
    fontSize: 10,
    color: "#333",
  },
  activeFilterText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  accountList: {
    paddingBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingVertical: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#8A2BE2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  cancelButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#CCC",
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#333",
  },
});
