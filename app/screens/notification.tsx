import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  isRead: boolean;
}

const mockNotifications: Notification[] = Array.from({ length: 50 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Notification ${i + 1}`,
  description: `This is the description of notification ${i + 1}`,
  timestamp: new Date(Date.now() - i * 3600 * 1000), // Hours ago
  isRead: i % 3 === 0, // Mark every 3rd notification as read
}));

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<Notification[]>(
    mockNotifications.slice(0, 15) // Load first 15 notifications initially
  );
  const [filter, setFilter] = useState<"latest" | "unread" | "older">("latest");

  const loadMoreNotifications = () => {
    const currentLength = notifications.length;
    const nextBatch = mockNotifications.slice(currentLength, currentLength + 15);
    setNotifications((prev) => [...prev, ...nextBatch]);
  };

  const filterNotifications = (type: "latest" | "unread" | "older") => {
    setFilter(type);
    switch (type) {
      case "unread":
        setNotifications(mockNotifications.filter((n) => !n.isRead));
        break;
      case "older":
        setNotifications(mockNotifications.slice(20)); // Show older notifications (for demo)
        break;
      default:
        setNotifications(mockNotifications.slice(0, 15)); // Reset to latest
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();

    const minutes = Math.floor(diff / 1000 / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

    return timestamp.toLocaleDateString();
  };

  const renderNotification = ({ item }: { item: Notification }) => (
    <TouchableOpacity style={[styles.notificationItem, item.isRead && styles.read]}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDescription}>{item.description}</Text>
      <Text style={styles.notificationTime}>{formatTimestamp(item.timestamp)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Filters */}
      <View style={styles.filtersContainer}>
        <Pressable
          style={[
            styles.filterButton,
            filter === "latest" && styles.activeFilter,
          ]}
          onPress={() => filterNotifications("latest")}
        >
          <Text style={styles.filterText}>Latest</Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterButton,
            filter === "unread" && styles.activeFilter,
          ]}
          onPress={() => filterNotifications("unread")}
        >
          <Text style={styles.filterText}>Unread</Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterButton,
            filter === "older" && styles.activeFilter,
          ]}
          onPress={() => filterNotifications("older")}
        >
          <Text style={styles.filterText}>Older</Text>
        </Pressable>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        onEndReached={loadMoreNotifications} // Load more notifications
        onEndReachedThreshold={0.5} // Trigger when scrolled 50%
        contentContainerStyle={styles.listContent}
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
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#EEE",
  },
  activeFilter: {
    backgroundColor: "#8A2BE2",
  },
  filterText: {
    fontSize: 14,
    color: "#666",
  },
  notificationItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#EEE",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  read: {
    opacity: 0.6, // Dims read notifications
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  notificationDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: "#AAA",
  },
  listContent: {
    paddingBottom: 20,
  },
});
