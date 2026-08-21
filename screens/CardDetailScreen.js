import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable
} from 'react-native';

export default function CardDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Dettaglio Carta
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Nome Carta
        </Text>

        <Text style={styles.value}>
          Carrefour
        </Text>

        <Text style={styles.label}>
          Categoria
        </Text>

        <Text style={styles.value}>
          Supermercato
        </Text>

        <Text style={styles.label}>
          Codice
        </Text>

        <Text style={styles.code}>
          1234567890123
        </Text>
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>
          Mostra in Cassa
        </Text>
      </Pressable>

      <Pressable style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>
          Modifica Carta
        </Text>
      </Pressable>

      <Pressable style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>
          Elimina Carta
        </Text>
      </Pressable>
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

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20
  },

  label: {
    fontSize: 13,
    color: '#666666',
    marginTop: 10
  },

  value: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4
  },

  code: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
    letterSpacing: 2
  },

  primaryButton: {
    backgroundColor: '#197A55',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#197A55',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10
  },

  secondaryButtonText: {
    color: '#197A55',
    fontWeight: 'bold'
  },

  deleteButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center'
  },

  deleteButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
