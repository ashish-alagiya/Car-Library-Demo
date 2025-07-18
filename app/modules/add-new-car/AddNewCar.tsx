import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { InputField } from '../../components/input_container/Input';
import CommonButton from '../../components/common-button/CommonButton';
import { styles } from './AddNewCarStyles';
import { useAddNewCar } from './useAddNewCar';
import { Icons } from '../../assets';
import { Colors } from '../../theme';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

const AddNewCar = () => {
  const {
    carName,
    setCarName,
    description,
    setDescription,
    carTypeDropdownData,
    setcarTags,
    selectedCarTags,
    setSelectedCarTags,
    imageUrl,
    setCarType,
    setImageUrl,
    handleAddCar,
    setSelectedCarType,
    selectedCarType,
    carTagsDropdownData,
    showErrors,
    isLoading,
  } = useAddNewCar();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Add Car</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Car name<Text style={styles.required}>*</Text>
          </Text>
          <InputField
            value={carName}
            onChangeText={setCarName}
            placeholder="Enter car name"
            isRequired={true}
            showError={showErrors && !carName}
            errorText="Car name is required"
            containerStyle={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.descriptionTextContainer}>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.charCount}>{description.length}/250 char</Text>
          </View>
          <View>
            <TextInput
              value={description}
              onChangeText={text => {
                if (text.length <= 250) {
                  setDescription(text);
                }
              }}
              placeholder="Enter here"
              multiline
              numberOfLines={6}
              style={styles.descriptionBox}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.carTypeError}>
            <Text style={styles.label}>
              Car type<Text style={styles.required}>*</Text>
            </Text>
            {showErrors && !selectedCarType && (
              <Text style={styles.errorText}>Mandatory</Text>
            )}
          </View>

          <Dropdown
            style={[
              styles.dropdown,
              showErrors && !selectedCarType && styles.errorBorder,
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={carTypeDropdownData}
            labelField="label"
            valueField="value"
            placeholder="Select"
            value={selectedCarType}
            containerStyle={styles.dropdownListContainer}
            onChange={item => {
              setSelectedCarType(item.value);
              setCarType(item.value);
            }}
            renderItem={(item, selected) => (
              <View style={styles.itemContainer}>
                <View style={styles.checkboxContainer}>
                  <Image
                    source={
                      selected ? Icons.radio_marked : Icons.radio_unmarked
                    }
                    style={styles.checkboxImage}
                  />

                  <Text style={styles.itemLabel}>{item.label}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.carTypeError}>
            <Text style={styles.label}>
              Specifications<Text style={styles.required}>*</Text>
            </Text>
            {showErrors && selectedCarTags.length === 0 && (
              <Text style={styles.errorText}>Mandatory</Text>
            )}
          </View>

          <MultiSelect
            data={carTagsDropdownData}
            labelField="label"
            valueField="value"
            value={selectedCarTags}
            onChange={(items: string[]) => {
              setSelectedCarTags(items);
              setcarTags(items);
            }}
            placeholderStyle={styles.placeholderStyle}
            style={styles.dropdown}
            containerStyle={styles.dropdownContainer}
            placeholder="Select"
            dropdownPosition="top"
            selectedStyle={styles.slectedOptionsContainer}
            selectedTextStyle={styles.selectedOptionText}
            renderItem={(item, selected) => (
              <View style={styles.itemContainer}>
                <View style={styles.checkboxContainer}>
                  <Image
                    source={
                      selected
                        ? Icons.checkbox_marked
                        : Icons.checkbox_unnmarked
                    }
                    style={styles.checkboxImage}
                  />

                  <Text style={styles.itemLabel}>{item.label}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Car Image URL<Text style={styles.required}>*</Text>
          </Text>
          <InputField
            value={imageUrl}
            onChangeText={setImageUrl}
            placeholder="Enter here"
            isRequired={true}
            showError={showErrors && !imageUrl}
            errorText="Mandatory!"
            containerStyle={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color={Colors.primary100} />
          ) : (
            <CommonButton
              text="Add"
              backgroundColor={Colors.primary100}
              style={styles.addButton}
              textStyle={styles.addButtonText}
              onPress={handleAddCar}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewCar;
