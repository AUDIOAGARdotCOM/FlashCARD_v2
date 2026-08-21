import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

export default function CardDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Dettaglio Carta
      </Text>

      <Text style={styles.label}>
        Nome carta
      </Text>

      <Text style={styles.value}>
        Esselunga
      </Text>

      <Text style={styles.label}>
        Categoria
      </Text>

      <Text style={styles.value}>
        Supermercato
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Mostra in cassa
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
    marginBottom: 30
  },

  label: {
    fontSize: 14,
    color: '#666666',
    marginTop: 10
  },

  value: {
    fontSize: 18,
    fontWeight: '600'
  },

  button: {
    marginTop: 40,
    backgroundColor: '#197A55',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
