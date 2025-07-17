import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation';
import { SafeAreaContainer } from './components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
