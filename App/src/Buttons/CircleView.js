import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Circle({ circleFunction, colour, orientation }) {
return ( 
  <View style={styles.circleButtonContainer}>
    <TouchableOpacity 
      style={styles.circleButton} 
      onPress={circleFunction}
    >
      <MaterialCommunityIcons 
        name="radar" 
        size={70} 
        color={colour}
      />
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: 'transparent',
  },
  rotation_portrait_left: {
    transform: [{rotateX: '90deg'}, {rotateZ: '90deg'}]
  },
  rotation_portrait_right: {
    transform: [{rotateX: '270deg'}, {rotateZ: '270deg'}]
  }
});
