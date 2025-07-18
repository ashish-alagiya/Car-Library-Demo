import { useState, useEffect } from 'react';
import { Car, RootStackParamList } from '../../types';
import { getCarDetails } from '../../api/CarApis';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type CarDetailsRouteProp = RouteProp<RootStackParamList, 'CarDetails'>;

export const useCarDetails = () => {
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigation = useNavigation();
  const { params } = useRoute<CarDetailsRouteProp>();

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);

      try {
        if (params.carId) {
          const response = await getCarDetails(params.carId);
          setCar(response);
        } else {
          setCar(null);
        }
      } catch (err) {
        console.error('Error fetching car details:', err);
        setCar(null);
      } finally {
        setLoading(false);
      }
    };

    if (params.carId) {
      fetchCarDetails();
    }
  }, [params.carId]);

  const onDeletePress = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return { car, loading, onDeletePress, showDeleteModal, navigation };
};
