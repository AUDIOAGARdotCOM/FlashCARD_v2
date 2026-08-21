import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>
        FlashCARD
      </Text>

      <Text style={styles.subtitle}>
        Accedi al tuo account
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            Accedi
          </Text>
        </Pressable>

        <Pressable style={styles.googleButton}>
          <Text style={styles.googleButtonText}>
            Accedi con Google
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBF9',
    padding: 20,
    justifyContent: 'center'
  },

  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#197A55'
  },

  subtitle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
    color: '#666666'
  },

  form: {
    width: '100%'
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7E2DC',
    borderRadius: 12,
    padding: 14,
    marginBottom: 15
  },

  loginButton: {
    backgroundColor: '#197A55',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  googleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7E2DC',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center'
  },

  googleButtonText: {
    fontWeight: 'bold',
    color: '#333333'
  }
});
