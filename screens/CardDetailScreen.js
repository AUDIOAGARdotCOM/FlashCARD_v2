import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView
} from 'react-native';

export default function CardDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Dettaglio Carta
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardName}>
            Carrefour
          </Text>

          <Text style={styles.cardCategory}>
            Supermercato
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>
            Codice Carta
          </Text>

          <Text style={styles.code}>
            1234567890123
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>
            Ultimo utilizzo
          </Text>

          <Text style={styles.value}>
            21/08/2026
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

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20
  },

  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#17392D'
  },

  cardCategory: {
    marginTop: 6,
    color: '#666666'
  },

  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12
  },

  label: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 6
  },

  value: {
    fontSize: 16,
    fontWeight: '600'
  },

  code: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2
  },

  primaryButton: {
    backgroundColor: '#197A55',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
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
    alignItems: 'center',
    marginBottom: 30
  },

  deleteButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
