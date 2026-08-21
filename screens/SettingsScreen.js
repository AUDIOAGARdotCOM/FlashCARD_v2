import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Switch,
  ScrollView
} from 'react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Impostazioni
        </Text>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>
            Sincronizza ora
          </Text>
        </Pressable>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>
            Backup Google Drive
          </Text>
        </Pressable>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>
            Ripristina Backup
          </Text>
        </Pressable>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>
            Cambia PIN
          </Text>
        </Pressable>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>
            Dimensione Testo
          </Text>
        </Pressable>

        <Pressable style={styles.switchRow}>
          <Text style={styles.itemText}>
            Modalità Scura
          </Text>

          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </Pressable>

        <Text style={styles.sectionTitle}>
          Zona Pericolosa
        </Text>

        <Pressable style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>
            Cancella tutti i dati
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBF9',
    padding: 20
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10
  },

  itemText: {
    fontSize: 16
  },

  switchRow: {
    backgroundColor:
