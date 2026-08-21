import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
  ScrollView
} from 'react-native';

export default function AddCardScreen() {
  const [cardName, setCardName] = useState('');
  const [cardCode, setCardCode] = useState('');
  const [category, setCategory] = useState('Supermercato');

  const categories = [
    'Supermercato',
    'Abbigliamento',
    'Farmacia',
    'Carburante',
    'Altro'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Nuova Carta
        </Text>

        <Text style={styles.label}>
          Nome Carta
        </Text>

        <TextInput
          style={styles.input}
          value={cardName}
          onChangeText={setCardName}
          placeholder="Es. Carrefour"
        />

        <Text style={styles.label}>
          Codice Carta
        </Text>

        <TextInput
          style={styles.input}
          value={cardCode}
          onChangeText={setCardCode}
          placeholder="Barcode o QR Code"
        />

        <Text style={styles.label}>
          Categoria
        </Text>

        <View style={styles.categories}>
          {categories.map(item => (
            <Pressable
              key={item}
              style={[
                styles.categoryButton,
                category === item && styles.categoryButtonActive
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === item && styles.categoryTextActive
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            Scansiona Barcode
          </Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            Scansiona QR Code
          </Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            Scatta Foto Carta
          </Text>
        </Pressable>

        <Pressable style={styles.saveButton}>
          <Text style={styles.saveButtonText}>
            Salva Carta
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

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 15
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7E2DC',
    borderRadius: 12,
    padding: 12
  },

  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },

  categoryButton: {
    borderWidth: 1,
    borderColor: '#D7E2DC',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8
  },

  categoryButtonActive: {
    backgroundColor: '#197A55',
    borderColor: '#197A55'
  },

  categoryText: {
    color: '#333333'
  },

  categoryTextActive: {
    color: '#FFFFFF'
  },

  actionButton: {
    backgroundColor: '#197A55',
