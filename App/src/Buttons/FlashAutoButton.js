import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FlashAutoButton({ size, colour, onPress }) {
  const space = ' '
  return (
    <View>
      <TouchableOpacity 
        onPress={onPress}
      >
        <MaterialIcons
          name="flash-auto"
          size={size}
          color={colour} 
        />
      </TouchableOpacity>
    </View>
  )
}

