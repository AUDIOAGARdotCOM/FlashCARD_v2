import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Impostazioni
      </Text>

      <Pressable style={styles.item}>
        <Text>Modalità Scura</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Text>Dimensione Testo</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Text>Backup</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Text>Ripristino Backup</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Text>Cambia PIN</Text>
      </Pressable>

      <Pressable style={styles.danger}>
        <Text style={styles.dangerText}>
          Cancella tutti i dati
        </Text>
      </Pressable>
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
    fontWeight: 'bold',
    marginBottom: 20
  },

  item: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    marginBottom: 10
  },

  danger: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#D32F2F',
    borderRadius: 10
  },

  dangerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
