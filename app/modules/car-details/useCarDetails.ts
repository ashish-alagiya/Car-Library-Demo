import { useState, useEffect } from 'react';
import { Car } from '../../types';
import { getCarDetails } from '../../api/CarApis';

export const useCarDetails = (carId: string | undefined) => {
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);

      try {
        if (carId) {
          const response = await getCarDetails(carId);
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

    if (carId) {
      fetchCarDetails();
    }
  }, [carId]);

  return { car, loading };
};
