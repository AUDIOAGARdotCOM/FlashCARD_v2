import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Non hai ancora carte fedeltà salvate
      </Text>

      <Text style={styles.subtitle}>
        Scansiona la tua prima carta per iniziare
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  subtitle: {
    marginTop: 10,
    color: '#666666',
    textAlign: 'center'
  }
});
