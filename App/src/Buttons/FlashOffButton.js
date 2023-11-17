import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FlashOffButton({ onPress, colour, size }) {
  const space = ' ';
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="flash-off"
          size={size}
          color={colour} 
        />
      </TouchableOpacity>
    </View>
  )
}

