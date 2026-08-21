import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

export default function AddCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Nuova Carta
      </Text>

      <Text style={styles.subtitle}>
        Schermata aggiunta carta
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  subtitle: {
    marginTop: 10,
    color: '#666666'
  }
});
