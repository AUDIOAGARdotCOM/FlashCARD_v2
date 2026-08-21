import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  View
} from 'react-native';

import SearchBar from '../components/SearchBar';
import CardItem from '../components/CardItem';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const cards = [
    {
      id: 1,
      name: 'Supermercato',
      category: 'Spesa'
    },
    {
      id: 2,
      name: 'Farmacia',
      category: 'Salute'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>
        FlashCARD
      </Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Cerca una carta..."
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Più utilizzate
        </Text>

        {cards.map(card => (
          <CardItem
            key={card.id}
            name={card.name}
            category={card.category}
            onPress={() => {}}
          />
        ))}
      </View>

      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>
          Scansiona una carta
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

  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#197A55',
    marginBottom: 20
  },

  section: {
    flex: 1,
    marginTop: 10
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },

  addButton: {
    backgroundColor: '#197A55',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center'
  },

  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});
