import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FlashOnButton({ onPress, colour, size }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name="flash" size={size} color={colour} />
      </TouchableOpacity>
    </View>
  )
}
