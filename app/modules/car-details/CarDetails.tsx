import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useCarDetails } from './useCarDetails';
import { styles } from './CarDetailsStyle';
import { CarDetailsProps } from '../../types';
import moment from 'moment';
import { ActivityLoader } from '../../components';
import { Icons } from '../../assets';

const CarDetails: React.FC<CarDetailsProps> = ({ route, navigation }) => {
  const { car, loading } = useCarDetails(route.params?.carId);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Image source={Icons.cross}/>
      </TouchableOpacity>
      <ActivityLoader isVisible={loading} />
      <ScrollView>
        <Text style={styles.title}>{car?.name}</Text>
        <Image
          source={{ uri: car?.imageUrl }}
          style={styles.carImage}
          resizeMode="cover"
        />
        <View style={styles.transmissionBadge}>
          <Text style={styles.transmissionText}>{car?.carType}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DESCRIPTION</Text>
          <Text style={styles.description}>{car?.description}</Text>
        </View>

        <View style={styles.devider} />
        <Text style={styles.sectionTitle}>SPECIFICATIONS</Text>
        <View style={styles.specificationView}>
          {car?.tags.map(item => {
            return (
              <View style={styles.specificationBox}>
                <Text style={styles.text}>{item}</Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.lastUpdated}>
          Last updated: {moment(car?.createdAt).format('MMM DD, YYYY')}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarDetails;
