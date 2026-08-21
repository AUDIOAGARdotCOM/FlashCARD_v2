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
    console.error(error);
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
    console.error(error);
    return false;
  }
}
