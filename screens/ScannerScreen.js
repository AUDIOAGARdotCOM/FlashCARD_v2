import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

export default function ScannerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Scanner
      </Text>

      <Text style={styles.description}>
        Inquadra un Barcode o un QR Code.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Avvia Scanner
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  description: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
    color: '#666666'
  },

  button: {
    marginTop: 30,
    backgroundColor: '#197A55',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
