import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { MenuProvider } from 'react-native-popup-menu';
import SplashScreen from 'react-native-splash-screen';

import { AppLayout } from './components/AppLayout';
import Routes from './Routes';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    setLoading(false);
  }, []);

  return (
    <AppLayout>
      {
        loading ? <StatusBar barStyle="light-content" /> :
        <StatusBar barStyle="light-content" backgroundColor="red" />
      }
      <SafeAreaProvider>
        <MenuProvider>
          <Routes />
        </MenuProvider>
      </SafeAreaProvider>
    </AppLayout>
  );
};

export default App;
