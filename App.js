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
  const [currentScreen] = useState('login');

  switch (currentScreen) {
    case 'home':
      return <HomeScreen />;

    case 'addCard':
      return <AddCardScreen />;

    case 'cardDetail':
      return <CardDetailScreen />;

    case 'vault':
      return <VaultScreen />;

    case 'settings':
      return <SettingsScreen />;

    case 'scanner':
      return <ScannerScreen />;

    case 'fullscreen':
      return <FullscreenCodeScreen />;

    default:
      return <LoginScreen />;
  }
}
