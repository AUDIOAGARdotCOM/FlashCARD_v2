import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.logo}>FlashCARD</Text>

      <TextInput
        style={styles.search}
        placeholder="Cerca una carta..."
      />

      <View style={styles.emptyContainer}>
        <Text style={styles.title}>
          Non hai ancora carte fedeltà salvate.
        </Text>

        <Text style={styles.subtitle}>
          Scansiona la tua prima carta per iniziare.
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Scansiona una carta
          </Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FBF9'
  },

  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#197A55',
    marginTop: 20,
    marginBottom: 20
  },

  search: {
    borderWidth: 1,
    borderColor: '#D7E2DC',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#FFFFFF'
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  subtitle: {
    marginTop: 10,
    textAlign: 'center',
    color: '#666666'
  },

  button: {
    marginTop: 30,
    backgroundColor: '#197A55',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
