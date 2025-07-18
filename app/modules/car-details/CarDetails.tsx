import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useCarDetails } from './useCarDetails';
import { styles } from './CarDetailsStyle';
import { CarDetailsProps } from '../../types';

const CarDetails: React.FC<CarDetailsProps> = ({ route, navigation }) => {
  const { car, loading, error } = useCarDetails(route.params?.carId);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.retryButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      ) : car ? (
        <ScrollView>
          <Text style={styles.title}>{car.name}</Text>

          <Image
            source={{ uri: car.image }}
            style={styles.carImage}
            resizeMode="cover"
          />

          <View style={styles.transmissionBadge}>
            <Text style={styles.transmissionText}>{car.transmission}</Text>
          </View>

          {car.description ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>DESCRIPTION</Text>
              <Text style={styles.description}>{car.description}</Text>
            </View>
          ) : null}

          {car.engine || car.displacement || car.fuelType || car.mileage ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SPECIFICATIONS</Text>

              <View style={styles.specsContainer}>
                {car.engine ? (
                  <View style={styles.specPill}>
                    <Text style={styles.specText}>Engine: {car.engine}</Text>
                  </View>
                ) : null}

                {car.displacement ? (
                  <View style={styles.specPill}>
                    <Text style={styles.specText}>
                      Displacement: {car.displacement}
                    </Text>
                  </View>
                ) : null}

                <View style={styles.specRow}>
                  {car.fuelType ? (
                    <View style={styles.specPill}>
                      <Text style={styles.specText}>
                        Fuel Type: {car.fuelType}
                      </Text>
                    </View>
                  ) : null}

                  {car.mileage ? (
                    <View style={styles.specPill}>
                      <Text style={styles.specText}>
                        Mileage (ARAI): {car.mileage}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
          ) : null}

          {car.lastUpdated ? (
            <Text style={styles.lastUpdated}>
              Last updated: {car.lastUpdated}
            </Text>
          ) : null}
        </ScrollView>
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Car not found</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.retryButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CarDetails;
