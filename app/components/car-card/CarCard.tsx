import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Car, CarDetailsNavigationProp, CarType } from '../../types';
import { styles } from './CarCardStyles';

// type RootStackParamList = {
//   CarDetails: { carId: string };
// };

// type CarDetailsNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'CarDetails'
// >;

interface Props {
  car: Car | CarType|any;
}

export const CarCard: React.FC<Props> = ({ car }) => {
  const navigation = useNavigation<CarDetailsNavigationProp>();

  const handlePress = () => {
    navigation.navigate('CarDetails', { carId: car.id.toString() });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={{ uri: car.image || car.imageUrl }}
        style={styles.image}
        resizeMode='cover'
        //defaultSource={require('../../assets/Icons/se')}
      />
      <View
        style={[
          styles.badge,
          car.transmission === 'Manual' || car.carType === 'manual'
            ? styles.manual
            : styles.automatic,
        ]}
      >
        <Text style={styles.badgeText}>
          {car.transmission ||
            (car.carType === 'manual' ? 'Manual' : 'Automatic')}
        </Text>
      </View>
      <Text style={styles.name}>{car.name}</Text>
    </TouchableOpacity>
  );
};
