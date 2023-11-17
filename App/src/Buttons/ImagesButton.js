import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ImageButton({ onPress, size, colour }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo name="folder-images" size={size} color={colour} />
    </TouchableOpacity>
  )
}
