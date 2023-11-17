import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';

export default function ButtonTemplateLeft({ backgroundColor, children }) {
  const { height } = useWindowDimensions();
  return (
    <View style={{
      height: height,
      width: 150,
      backgroundColor: backgroundColor,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      flexDirection: 'row',
      margin: 0
    }}>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          margin: 0,
        }}>
          {children}
      </View>
    </View>
  );
}

