import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@flashcard_cards';

export async function getCards() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    console.error('Errore lettura carte:', error);
    return [];
  }
}

export async function saveCards(cards) {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cards)
    );

    return true;
  } catch (error) {
    console.error('Errore salvataggio carte:', error);
    return false;
  }
}

export async function addCard(card) {
  try {
    const cards = await getCards();

    cards.push(card);

    await saveCards(cards);

    return cards;
  } catch (error) {
    console.error('Errore aggiunta carta:', error);
    return [];
  }
}

export async function deleteCard(cardId) {
  try {
    const cards = await getCards();

    const updatedCards = cards.filter(
      card => card.id !== cardId
    );

    await saveCards(updatedCards);

    return updatedCards;
  } catch (error) {
    console.error('Errore eliminazione carta:', error);
    return [];
  }
}

export async function updateCard(updatedCard) {
  try {
    const cards = await getCards();

    const updatedCards = cards.map(card =>
      card.id === updatedCard.id
        ? updatedCard
        : card
    );

    await saveCards(updatedCards);

    return updatedCards;
  } catch (error) {
    console.error('Errore aggiornamento carta:', error);
    return [];
  }
}
