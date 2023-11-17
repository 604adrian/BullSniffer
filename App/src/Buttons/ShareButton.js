import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ShareButton({ colour, size, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name="share" size={size} color={colour} /> 
    </TouchableOpacity>
  )
}
