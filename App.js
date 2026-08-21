import React, { useState } from 'react';

import HomeScreen from './screens/HomeScreen';
import AddCardScreen from './screens/AddCardScreen';
import CardDetailScreen from './screens/CardDetailScreen';
import VaultScreen from './screens/VaultScreen';
import SettingsScreen from './screens/SettingsScreen';
import ScannerScreen from './screens/ScannerScreen';
import FullscreenCodeScreen from './screens/FullscreenCodeScreen';

export default function App() {
  const [screen, setScreen] = useState('home');

  switch (screen) {
    case 'add':
      return <AddCardScreen />;

    case 'detail':
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
      return <HomeScreen />;
  }
}
