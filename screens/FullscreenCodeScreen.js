import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View
} from 'react-native';

export default function FullscreenCodeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Modalità Cassa
      </Text>

      <View style={styles.codeBox}>
        <Text style={styles.code}>
          1234567890123
        </Text>
      </View>

      <Text style={styles.info}>
        Mostra questo codice alla cassa per la scansione.
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

  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30
  },

  codeBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center'
  },

  code: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 3
  },

  info: {
    marginTop: 20,
    color: '#CCCCCC',
    textAlign: 'center'
  }
});
