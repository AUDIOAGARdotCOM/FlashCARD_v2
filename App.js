import React, { useState } from 'react';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AddCardScreen from './screens/AddCardScreen';
import CardDetailScreen from './screens/CardDetailScreen';
import VaultScreen from './screens/VaultScreen';
import SettingsScreen from './screens/SettingsScreen';
import ScannerScreen from './screens/ScannerScreen';
import FullscreenCodeScreen from './screens/FullscreenCodeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState('login');

  const navigation = {
    goToLogin: () => setCurrentScreen('login'),
    goToHome: () => setCurrentScreen('home'),
    goToAddCard: () => setCurrentScreen('addCard'),
    goToCardDetail: () =>
      setCurrentScreen('cardDetail'),
    goToVault: () => setCurrentScreen('vault'),
    goToSettings: () =>
      setCurrentScreen('settings'),
    goToScanner: () => setCurrentScreen('scanner'),
    goToFullscreen: () =>
      setCurrentScreen('fullscreen')
  };

  switch (currentScreen) {
    case 'home':
      return <HomeScreen navigation={navigation} />;

    case 'addCard':
      return <AddCardScreen navigation={navigation} />;

    case 'cardDetail':
      return (
        <CardDetailScreen navigation={navigation} />
      );

    case 'vault':
      return <VaultScreen navigation={navigation} />;

    case 'settings':
      return (
        <SettingsScreen navigation={navigation} />
      );

    case 'scanner':
      return (
        <ScannerScreen navigation={navigation} />
      );

    case 'fullscreen':
      return (
        <FullscreenCodeScreen
          navigation={navigation}
        />
      );

    default:
      return (
        <LoginScreen navigation={navigation} />
      );
  }
}
