import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FlashCARD</Text>
      <Text style={styles.subtitle}>
        Scansiona la tua prima carta fedeltà
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#197A55'
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center'
  }
});
