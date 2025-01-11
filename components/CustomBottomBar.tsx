import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function CustomBottomBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Extract the `tabBarIcon` function and call it to render the icon.
        const IconComponent =
          typeof options.tabBarIcon === "function"
            ? options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? "#8A2BE2" : "#ccc",
                size: 24,
              })
            : null;

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton]}
          >
            {/* Render the icon */}
            {IconComponent}

            {/* Render the label */}
            <Text style={[styles.label, isFocused && styles.labelFocused]}>
              {typeof options.tabBarLabel === "function"
                ? options.tabBarLabel({
                    focused: isFocused,
                    color: isFocused ? "#8A2BE2" : "#ccc",
                    position: "below-icon",
                    children: route.name,
                  })
                : options.tabBarLabel || route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    elevation: 10, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tabButton: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 4,
  },
  labelFocused: {
    color: "#8A2BE2",
    fontWeight: "bold",
  },
});
