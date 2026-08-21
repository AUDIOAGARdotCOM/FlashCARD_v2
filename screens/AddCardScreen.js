import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View
} from 'react-native';

export default function AddCardScreen() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('Supermercato');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Nuova Carta
      </Text>

      <Text style={styles.label}>
        Nome negozio
      </Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Es. Carrefour"
      />

      <Text style={styles.label}>
        Codice Barcode / QR
      </Text>

      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="Inserisci il codice"
      />

      <Text style={styles.label}>
        Categoria
      </Text>

      <View style={styles.categories}>
        <Pressable
          style={[
            styles.category,
            category === 'Supermercato' && styles.activeCategory
          ]}
          onPress={() => setCategory('Supermercato')}
        >
          <Text>Supermercato</Text>
        </Pressable>

        <Pressable
          style={[
            styles.category,
            category === 'Farmacia' && styles.activeCategory
          ]}
          onPress={() => setCategory('Farmacia')}
        >
          <Text>Farmacia</Text>
        </Pressable>

        <Pressable
          style={[
            styles.category,
            category === 'Altro' && styles.activeCategory
          ]}
          onPress={() => setCategory('Altro')}
        >
          <Text>Altro</Text>
        </Pressable>
      </View>

      <Pressable style={styles.scanButton}>
        <Text style={styles.scanText}>
          Scansiona Barcode o QR
        </Text>
      </Pressable>

      <Pressable style={styles.saveButton}>
        <Text style={styles.saveText}>
          Salva Carta
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FBF9'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  label: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '600'
  },

  input: {
    borderWidth: 1,
    borderColor: '#D7E2DC',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12
  },

  categories: {
    flexDirection: 'row',
    marginTop: 10
  },

  category: {
    borderWidth: 1,
    borderColor: '#D7E2DC',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#FFFFFF'
  },

  activeCategory: {
    backgroundColor: '#DDF0E8'
  },

  scanButton: {
    marginTop: 25,
    backgroundColor: '#197A55',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },

  scanText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  saveButton: {
    marginTop: 15,
    backgroundColor: '#0F5C3F',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },

  saveText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
