// Define TypeScript interfaces for global types used throughout the application.
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType, ImageStyle, KeyboardTypeOptions, ViewStyle } from "react-native";

export interface CarType {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  carType: 'automatic' | 'manual';
}

// export type Car = {
//   id: number;
//   imageUrl: string;
//   name: string;
//   description: string;
//   carType: 'manual' | 'automatic';
//   tags: string[];
//   createdAt: string;
// };

export type CarFilters = {
  search?: string;
  carType?: string;
  tags?: string[];
  sortBy?: 'createdAt' | 'name';
  sortOrder?: 'ASC' | 'DESC';
};

export type CreateCarPayload = {
  imageUrl: string;
  name: string;
  description: string;
  carType: 'manual' | 'automatic';
  tags: string[];
};

export type UpdateCarPayload = Partial<CreateCarPayload> & { id: number };
export interface Props {
  value: string;
  onChange: (text: string) => void;
  onSort: () => void;
  onFilter: () => void;
  onRefresh: () => void;
}

export interface Car {
  id: string;
  name: string;
  image: string;
  transmission: 'Manual' | 'Automatic';
  description?: string;
  engine?: string;
  displacement?: string;
  fuelType?: string;
  mileage?: string;
  lastUpdated?: string;
}
export interface CarDetailsProps {
  route: { params?: { carId?: string } };
  navigation: { goBack: () => void };
}
export interface InputFieldProps {
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  isRequired?: boolean;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  showError?: boolean;
  errorText?: string;
  iconStyle?: ImageStyle;
  keyboardType?: KeyboardTypeOptions;
  containerStyle?: ViewStyle;
  multiline?:boolean;
  numberOfLines?:any
  isDropdown?: boolean;
  onDropdownPress?: () => void;
}

type RootStackParamList = {
  CarDetails: { carId: string };
  AddNewCar:undefined
};

export type CarDetailsNavigationProp = StackNavigationProp<RootStackParamList,'CarDetails'>
export type AddNewCarNavigationProp = StackNavigationProp<RootStackParamList,'AddNewCar'>