import { useState, useEffect } from 'react';
import { Car } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';

// Helper function to map API data to Car type with empty strings for missing fields
const mapApiDataToCar = (detailedCar: any): Car => ({
  id: detailedCar.id.toString(),
  name: detailedCar.name,
  image: detailedCar.imageUrl,
  transmission: detailedCar.carType === 'manual' ? 'Manual' : 'Automatic',
  description: detailedCar.description || '',
  engine: detailedCar.engine || '',
  displacement: detailedCar.displacement || '',
  fuelType: detailedCar.fuelType || '',
  mileage: detailedCar.mileage || '',
  lastUpdated: detailedCar.lastUpdated || '',
});

export const useCarDetails = (carId: string | undefined) => {
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get cars from Redux store
  const { cars } = useSelector((state: RootState) => state.carsList);

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        // First check if we have the car in the Redux store

        if (carId) {
          // Fetch car details from API
          const response = await fetch(
            `https://cars-mock-api-new-6e7a623e6570.herokuapp.com/api/cars/${carId}`,
          );
          // const response = await fetchCarDetails(carId)
          if (!response.ok) {
            throw new Error('Failed to fetch car details');
          }

          const detailedCar = await response.json();
          setCar(mapApiDataToCar(detailedCar));
        } else {
          setCar(null);
        }
      } catch (err) {
        console.error('Error fetching car details:', err);
        setError('Failed to load car details');
        setCar(null);
      } finally {
        setLoading(false);
      }
    };

    if (carId) {
      fetchCarDetails();
    }
  }, [carId, cars]);

  return { car, loading, error };
};
