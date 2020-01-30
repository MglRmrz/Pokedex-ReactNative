import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { MenuProvider } from 'react-native-popup-menu';

import { AppLayout } from './components/AppLayout';
import Routes from './Routes';

const App = () => {
  return (
    <AppLayout>
      <StatusBar barStyle="light-content" backgroundColor="red" />
      <SafeAreaProvider>
        <MenuProvider>
          <Routes />
        </MenuProvider>
      </SafeAreaProvider>
    </AppLayout>
  );
};

export default App;
