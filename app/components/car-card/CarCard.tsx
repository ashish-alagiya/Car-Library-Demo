import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Car, CarDetailsNavigationProp, CarType } from '../../types';
import { styles } from './CarCardStyles';
import { Colors } from '../../theme';

interface Props {
  car: Car | CarType | any;
}

export const CarCard: React.FC<Props> = ({ car }) => {
  const navigation = useNavigation<CarDetailsNavigationProp>();

  const handlePress = () => {
    navigation.navigate('CarDetails', { carId: car.id.toString() });
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <ImageBackground style={styles.container} resizeMode="contain">
        <Image
          source={{ uri: car.image || car.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <View
          style={[
            styles.badge,
            car.transmission === 'Manual' || car.carType === 'manual'
              ? styles.manual
              : styles.automatic,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color:
                  car.carType === 'manual'
                    ? Colors.manualText
                    : Colors.automaticText,
              },
            ]}
          >
            {car.transmission ||
              (car.carType === 'manual' ? 'Manual' : 'Automatic')}
          </Text>
        </View>
        <Text style={styles.name}>{car.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
