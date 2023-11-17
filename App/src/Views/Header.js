import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StatusBar } from 'expo-status-bar';

export default function HeaderView({ backgroundColor, onPress }) {
  return (
    <View 
      style={{
        padding: 15, 
        backgroundColor: backgroundColor,
        alignItems: 'flex-start'
      }}>
      <View style={{ padding: 10, paddingTop: 25 }} >
        <TouchableOpacity onPress={onPress}>
          <FontAwesome 
            name="question-circle" 
            size={24} 
            color='white' 
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  )
}
