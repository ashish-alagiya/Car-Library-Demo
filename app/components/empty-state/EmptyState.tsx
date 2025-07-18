import React from 'react';
import { View, Text, Image } from 'react-native';
import { Images } from '../../assets';
import { styles } from './EmptyStateStyle';

interface EmptyStateProps {
  searchQuery?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ searchQuery }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={Images.notFound} style={styles.notFoundImg} />
      </View>
      <Text style={styles.title}>
        {searchQuery
          ? `No results found with '${searchQuery}'`
          : 'No cars found'}
      </Text>
    </View>
  );
};

export default EmptyState;
