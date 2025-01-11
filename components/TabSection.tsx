import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function TabsSection() {
  const [activeParentTab, setActiveParentTab] = useState('Expenses & Income');
  const [activeChildTab, setActiveChildTab] = useState('Today');

  const parentTabs = ['Expenses & Income', 'Payable & Receivable'];
  const childTabs = ['Today', 'This Week', 'This Month'];

  return (
    <View style={styles.container}>
      {/* Parent Tabs */}
      <View style={styles.parentTabs}>
        {parentTabs.map((tab) => (
          <Pressable
            key={tab}
            style={[
              styles.parentTab,
              tab === activeParentTab && styles.activeParentTab,
            ]}
            onPress={() => setActiveParentTab(tab)}
          >
            <Text
              style={[
                styles.parentTabText,
                tab === activeParentTab && styles.activeParentTabText,
              ]}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
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
    marginTop: 20,
    paddingHorizontal: 20,
  },
  parentTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  parentTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#EEE',
  },
  activeParentTab: {
    backgroundColor: '#8A2BE2',
  },
  parentTabText: {
    fontSize: 14,
    color: '#666',
  },
  activeParentTabText: {
    color: '#FFF',
  },
  childTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  childTab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#EEE',
  },
  activeChildTab: {
    backgroundColor: '#8A2BE2',
  },
  childTabText: {
    fontSize: 12,
    color: '#666',
  },
  activeChildTabText: {
    color: '#FFF',
  },
});
