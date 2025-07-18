import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { useCarDetails } from './useCarDetails';
import { styles } from './CarDetailsStyle';
import moment from 'moment';
import { ActivityLoader, PopUpModal } from '../../components';
import { Icons } from '../../assets';

const CarDetails: React.FC = () => {
  const {
    car,
    loading,
    onDeletePress,
    showDeleteModal,
    navigation,
    onDeleteConfirm,
  } = useCarDetails();

  const RenderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.specificationBox}>
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={onDeletePress} style={styles.deleteIconView}>
          <Image
            source={Icons.deleteIcon}
            style={styles.deleteIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}
        >
          <Image source={Icons.cross} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
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
        <FlatList<string>
          data={car?.tags ?? []}
          numColumns={3}
          renderItem={RenderItem}
        />
        <Text style={styles.lastUpdated}>
          Last updated: {moment(car?.createdAt).format('MMM DD, YYYY')}
        </Text>
      </ScrollView>
      <PopUpModal
        visible={showDeleteModal}
        carName={car?.name ?? ''}
        onCancel={onDeletePress}
        onDelete={onDeleteConfirm}
      />
    </View>
  );
};

export default CarDetails;
