import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import {TextCss} from './transaction';

export default function TabOneScreen() {
  const getCurrentGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return 'Good Morning!';
    if (currentHour < 18) return 'Good Afternoon!';
    return 'Good Evening!';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{getCurrentGreeting()}</Text>
    {/* show current time */}
    <Text style={TextCss.text}>Current Time: {new Date().toLocaleTimeString()}</Text>
      <Text style={styles.description}>
        This is your personalized welcome screen. Have a great day ahead!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});
