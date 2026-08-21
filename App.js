import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>FlashCARD</Text>

      <Text style={styles.message}>
        Non hai ancora carte fedeltà salvate.
      </Text>

      <Text style={styles.message}>
        Scansiona la tua prima carta per iniziare.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Scansiona una carta
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#197A55'
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center'
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
