import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { createCar, getCarTags, getCarTypes } from '../../api/CarApis';
import { CarType } from '../../types';
import { useNavigation } from '@react-navigation/native';

export const useAddNewCar = () => {
  const navigation = useNavigation();
  const [carName, setCarName] = useState('');
  const [description, setDescription] = useState('');
  const [carType, setCarType] = useState('');
  const [carTags, setcarTags] = useState<string[]>([]);
  const [specifications, setSpecifications] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const [carTypeDropdownData, setCarTypeDropdownData] = useState<
    { label: string; value: string }[]
  >([]);
  const [carTagsDropdownData, setcarTagsDropdownData] = useState<
    { label: string; value: string }[]
  >([]);

  const [carTypeOptions, setCarTypeOptions] = useState([]);
  const [selectedCarType, setSelectedCarType] = useState<string>('');
  const [selectedCarTags, setSelectedCarTags] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);

  const [carTypeDropdownVisible, setCarTypeDropdownVisible] = useState(false);
  const [specDropdownVisible, setSpecDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchCarTypes = async () => {
      const types = await getCarTypes();
      const formatted = types.map(type => ({
        label: type,
        value: type,
      }));
      setCarTypeDropdownData(formatted);
    };

    fetchCarTypes();
  }, []);

  useEffect(() => {
    const fetchCarTags = async () => {
      const tags = await getCarTags();
      const response = tags.map(tag => ({
        label: tag,
        value: tag,
      }));

      setcarTagsDropdownData(response);
    };

    fetchCarTags();
  }, []);

  const errors = {
    carName: !carName.trim(),
    carType: !carType.trim(),
    specifications: !specifications.trim(),
    imageUrl: !imageUrl.trim(),
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleAddCar = async () => {
    setShowErrors(true);

    if (
      !carName.trim() ||
      !selectedCarType ||
      !selectedCarTags?.length ||
      !imageUrl.trim()
    ) {
      return;
    }

    try {
      setIsLoading(true);
      const newCar: Partial<CarType> = {
        name: carName.trim(),
        description: description.trim(),
        carType: selectedCarType.toLowerCase(),
        tags: Array.isArray(selectedCarTags)
          ? selectedCarTags
          : [selectedCarTags],
        imageUrl: imageUrl.trim(),
      };

      await createCar(newCar);

      Alert.alert('Success', 'Car added successfully!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
    } catch (error) {
      console.error('Add car error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onBackPress = () => navigation.goBack();

  return {
    carName,
    setCarName,
    description,
    setDescription,
    carType,
    carTypeDropdownData,
    setCarTypeDropdownData,
    setCarType,
    specifications,
    setSpecifications,
    imageUrl,
    setImageUrl,
    handleAddCar,
    errors,
    selectedCarType,
    visible,
    setVisible,
    showErrors,
    carTypeDropdownVisible,
    setCarTypeDropdownVisible,
    setSelectedCarType,
    carTypeOptions,
    setCarTypeOptions,
    specDropdownVisible,
    setSpecDropdownVisible,
    carTagsDropdownData,
    setcarTagsDropdownData,
    carTags,
    setcarTags,
    selectedCarTags,
    setSelectedCarTags,
    isLoading,
    onBackPress,
  };
};
