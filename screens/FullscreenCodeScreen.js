import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable
} from 'react-native';

export default function FullscreenCodeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.closeButton}>
        <Text style={styles.closeText}>Chiudi</Text>
      </Pressable>

      <Text style={styles.title}>
        Mostra in Cassa
      </Text>

      <View style={styles.codeContainer}>
        <View style={styles.barcodePlaceholder}>
          <Text style={styles.barcodeText}>
            ||||| || ||||| |||| |||
          </Text>
        </View>

        <Text style={styles.codeNumber}>
          1234567890123
        </Text>
      </View>

      <Text style={styles.info}>
        Mostra questo codice al lettore della cassa
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20
  },

  closeText: {
    color: '#FFFFFF',
    fontSize: 16
  },

  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30
  },

  codeContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center'
  },

  barcodePlaceholder: {
    marginBottom: 20
  },

  barcodeText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2
  },

  codeNumber: {
    fontSize: 18,
    fontWeight: '600'
  },

  info: {
    marginTop: 25,
    color: '#CCCCCC',
    textAlign: 'center'
  }
});

