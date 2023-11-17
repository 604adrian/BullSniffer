import { View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function HeaderView({ backgroundColor, onPress }) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        alignItems: 'flex-end'
      }}>
      <TouchableOpacity
        onPress={onPress} 
      >
        <MaterialCommunityIcons 
          name="alpha-x-circle-outline" 
          size={30} color="white" 
          style={{ paddingTop: 15 }}
        />
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>

  )
}
