import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Dropdown from "./Dropdown";

export default function TabsSection() {
  const [activeParentTab, setActiveParentTab] = useState("Expenses & Income");
  const [activeChildTab, setActiveChildTab] = useState("Today");

  const parentTabs = ["All","Expenses & Income", "Payable & Receivable"];
  const childTabs = ["Today", "This Week", "This Month"];

  return (
    <View style={styles.container}>
      {/* Parent Tabs */}
      <View>
        <View style={styles.textWithDropdown}>
          <Text style={[styles.parentTabText]}>Transaction Summary </Text>
          <Dropdown
            options={parentTabs}
            selected={activeParentTab}
            onSelect={setActiveParentTab}
          />
        </View>
      </View>

      {/* Child Tabs */}
      <View style={styles.childTabs}>
        {childTabs.map((tab) => (
          <Pressable
            key={tab}
            style={[
              styles.childTab,
              tab === activeChildTab && styles.activeChildTab,
            ]}
            onPress={() => setActiveChildTab(tab)}
          >
            <Text
              style={[
                styles.childTabText,
                tab === activeChildTab && styles.activeChildTabText,
              ]}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  textWithDropdown: {
    display: "flex",  // Added
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  parentTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  parentTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#EEE",
  },
  activeParentTab: {
    backgroundColor: "#8A2BE2",
  },
  parentTabText: {
    fontSize: 14,
    color: "#666",
  },
  activeParentTabText: {
    color: "#FFF",
  },
  childTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  childTab: {
    width: "30%",
    paddingVertical: 8,
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#EEE",
  },
  activeChildTab: {
    backgroundColor: "#8A2BE2",
  },
  childTabText: {
    fontSize: 12,
    color: "#666",
  },
  activeChildTabText: {
    color: "#FFF",
  },
});
