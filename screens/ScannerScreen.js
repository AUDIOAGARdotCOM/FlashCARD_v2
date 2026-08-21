import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable
} from 'react-native';

export default function ScannerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Scanner
      </Text>

      <Text style={styles.subtitle}>
        Inquadra un codice a barre oppure un QR Code
      </Text>

      <View style={styles.scanArea}>
        <Text style={styles.scanText}>
          Area di scansione
        </Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Avvia fotocamera
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

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },

  subtitle: {
    color: '#666666',
    marginBottom: 30
  },

  scanArea: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#197A55',
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300
  },

  scanText: {
    color: '#197A55',
    fontWeight: '600'
  },

  button: {
    marginTop: 20,
    backgroundColor: '#197A55',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
