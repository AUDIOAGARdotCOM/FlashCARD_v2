import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

export default function SearchBar({
  value,
  onChangeText,
  placeholder
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || 'Cerca una carta...'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7E2DC',
    borderRadius: 12,
    padding: 12,
    fontSize: 16
  }
});
