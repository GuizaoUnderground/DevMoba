import React from 'react';
import { Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';

interface EasterEggProps {
  isVisible: boolean;
  onClose: () => void;
}

const EasterEgg: React.FC<EasterEggProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <Image
          source={require('../../assets/images/easter_egg.jpeg')}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default EasterEgg;