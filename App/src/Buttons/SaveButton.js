import { StyleSheet, View, TouchableOpacity} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Foundation } from '@expo/vector-icons';

export default function SaveButton({ colour, onPress }) {
  return (
    <TouchableOpacity style={styles.saveButtonContainer} onPress={onPress}>
      <View style={styles.saveButton}>
        <Foundation name="download" size={60} color={colour} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  saveButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  saveButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: 'transparent',
  },
});
