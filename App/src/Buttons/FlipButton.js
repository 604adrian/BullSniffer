import { TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FlipButton({ flipFunction, size, colour }) {
  return (
    <TouchableOpacity onPress={flipFunction}>
      <MaterialCommunityIcons name="camera-flip" size={size+2} color={colour} />
    </TouchableOpacity>
  )

}
