import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionScreen() {
  return (
    <View style={TextCss.container}>
      <Text style={TextCss.text}>Welcome to the Transation Screen!</Text>
    </View>
  );
}

export const TextCss = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});