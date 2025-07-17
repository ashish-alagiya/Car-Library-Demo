import AsyncStorage from '@react-native-async-storage/async-storage';

enum StorageKeys {}


const clearAll = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    return Promise.reject(new Error('Failed to clear async storage.'));
  }
};


export default {
  clearAll
};
