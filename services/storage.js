import AsyncStorage from '@react-native-async-storage/async-storage';

const CARDS_STORAGE_KEY = '@flashcard_cards';
const VAULT_STORAGE_KEY = '@flashcard_vault';

export async function loadCards() {
  try {
    const data = await AsyncStorage.getItem(
      CARDS_STORAGE_KEY
    );

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function saveCards(cards) {
  try {
    await AsyncStorage.setItem(
      CARDS_STORAGE_KEY,
      JSON.stringify(cards)
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function loadVault() {
  try {
    const data = await AsyncStorage.getItem(
      VAULT_STORAGE_KEY
    );

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function saveVault(items) {
  try {
    await AsyncStorage.setItem(
      VAULT_STORAGE_KEY,
      JSON.stringify(items)
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function clearAllData() {
  try {
    await AsyncStorage.removeItem(
      CARDS_STORAGE_KEY
    );

    await AsyncStorage.removeItem(
      VAULT_STORAGE_KEY
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
