import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList
} from 'react-native';

import SearchBar from '../components/SearchBar';
import CardItem from '../components/CardItem';
import EmptyState from '../components/EmptyState';
import { loadCards } from '../services/storage';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const savedCards = await loadCards();
    setCards(savedCards);
  }

  const filteredCards = cards.filter(card =>
    card.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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

      <Text style={styles.sectionTitle}>
        Le tue carte
      </Text>

      {filteredCards.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={filteredCards}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardItem
              name={item.name}
              category={item.category}
              onPress={() => {}}
            />
          )}
        />
      )}

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

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10
  },

  addButton: {
    backgroundColor: '#197A55',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginTop: 10
  },

  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});
