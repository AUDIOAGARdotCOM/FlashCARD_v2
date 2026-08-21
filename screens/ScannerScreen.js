import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable
} from 'react-native';

export default function ScannerScreen() {
  const [scanType, setScanType] = useState('barcode');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Scanner
      </Text>

      <Text style={styles.subtitle}>
        Inquadra un Barcode oppure un QR Code
      </Text>

      <View style={styles.selector}>
        <Pressable
          style={[
            styles.selectorButton,
            scanType === 'barcode' && styles.selectedButton
          ]}
          onPress={() => setScanType('barcode')}
        >
          <Text
            style={[
              styles.selectorText,
              scanType === 'barcode' && styles.selectedText
            ]}
          >
            Barcode
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.selectorButton,
            scanType === 'qr' && styles.selectedButton
          ]}
          onPress={() => setScanType('qr')}
        >
          <Text
            style={[
              styles.selectorText,
              scanType === 'qr' && styles.selectedText
            ]}
          >
            QR Code
          </Text>
        </Pressable>
      </View>

      <View style={styles.cameraArea}>
        <Text style={styles.cameraText}>
          Area Fotocamera
        </Text>
      </View>

      <Pressable style={styles.scanButton}>
        <Text style={styles.scanButtonText}>
          Avvia Scanner
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
    marginBottom: 20
  },

  selector: {
    flexDirection: 'row',
    marginBottom: 20
  },

  selectorButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#D7E2DC',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },

  selectedButton: {
    backgroundColor: '#197A55'
  },

  selectorText: {
    color: '#333333'
  },

  selectedText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  cameraArea: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#197A55',
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 320
  },

  cameraText: {
    fontSize: 18,
    color: '#197A55',
    fontWeight: '600'
  },

  scanButton: {
    marginTop: 20,
    backgroundColor: '#197A55',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center'
  },

  scanButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
