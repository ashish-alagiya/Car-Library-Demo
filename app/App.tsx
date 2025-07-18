import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
