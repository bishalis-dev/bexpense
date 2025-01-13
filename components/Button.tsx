import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>; // Accepts additional button styles
  textStyle?: StyleProp<TextStyle>; // Allows customizing the text styles
  disabled?: boolean; // Optional: disable button
}

export default function PrimaryButton({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.Button,
        disabled && styles.disabledButton, // Apply disabled styles when applicable
        style,
      ]}
      onPress={disabled ? undefined : onPress} // Disable onPress when button is disabled
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#8A2BE2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#CCC", // Light gray background
  },
});
