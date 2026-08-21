import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

export default function VaultScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Cassaforte
      </Text>

      <Text style={styles.description}>
        Proteggi documenti personali, tessere e coupon.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Sblocca Cassaforte
        </Text>
      </Pressable>

      <Text style={styles.info}>
        Nessun documento disponibile.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FBF9'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17392D'
  },

  description: {
    marginTop: 10,
    fontSize: 16,
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
  },

  info: {
    marginTop: 30,
    textAlign: 'center',
    color: '#666666'
  }
});
