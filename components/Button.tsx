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
        styles.button,
        disabled && styles.disabledButton, // Apply disabled styles when applicable
        style,
      ]}
      onPress={disabled ? undefined : onPress} // Disable onPress when button is disabled
      activeOpacity={0.8}
    >
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  disabledButton: {
    backgroundColor: '#B0BEC5', // Grayish color for disabled state
  },
  title: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
