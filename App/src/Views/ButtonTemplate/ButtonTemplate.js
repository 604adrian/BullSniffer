import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ButtonTemplate({ backgroundColor, children }) {
  return (
    <View style={{
      height: 150,
      alignItems: 'center',
      backgroundColor: backgroundColor,
      padding: 15,
      borderTopWidth: 5,
      borderTopColor: 'white'
    }}>
      <View
        style={{
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          padding: 20,
          flexDirection: 'row'
        }}>
          {children}
      </View>
    </View>
  );
}

