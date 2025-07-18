import React from 'react';
import { Modal, View, Text, Image, StyleSheet } from 'react-native';
import { Icons } from '../../assets';
import CommonButton from '../common-button/CommonButton';
import {
  verticalScale,
  moderateScale,
  Colors,
  horizontalScale,
} from '../../theme';
import AppText from '../app-text/AppText';

interface PopUpModalProps {
  visible: boolean;
  carName: string;
  onDelete: () => void;
  onCancel: () => void;
}

const PopUpModal: React.FC<PopUpModalProps> = ({
  visible,
  carName,
  onDelete,
  onCancel,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image
            source={Icons.deleteIcon}
            style={styles.icon}
            resizeMode="contain"
          />
          <AppText style={styles.title}>Delete {carName}?</AppText>
          <AppText style={styles.subtitle}>
            Are you sure you want to delete this Car?
          </AppText>
          <View style={styles.buttonRow}>
            <CommonButton
              text="Cancel"
              onPress={onCancel}
              style={styles.cancelButton}
              textStyle={styles.cancelText}
            />
            <CommonButton
              text="Delete"
              onPress={onDelete}
              style={styles.deleteButton}
              textStyle={styles.deleteText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: Colors.white,
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    alignItems: 'center',
  },
  icon: {
    height: verticalScale(30),
    tintColor: 'red',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginTop: verticalScale(12),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: moderateScale(14),
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: verticalScale(20),
  },
  cancelButton: {
    borderColor: Colors.black,
    borderWidth: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(20),
  },
  cancelText: {
    color: Colors.black,
  },
  deleteButton: {
    backgroundColor: Colors.black,
    paddingHorizontal: horizontalScale(20),
  },
  deleteText: {
    color: Colors.white,
  },
});

export default PopUpModal;
