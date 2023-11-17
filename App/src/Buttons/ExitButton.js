import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ExitButton({ exitFunction, size, colour }) {
return (
    <TouchableOpacity style={styles.xContainer} onPress={exitFunction}>
      <View style={styles.xContainer}>
        <Text style={styles.x}>
          <Entypo name="arrow-bold-left" size={size} color={colour} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  xContainer: {
    borderRadius: 100 / 2,
    backgroundColor: "transparent",
    alignItems: 'center',
  },
  x: {
    fontWeight: 900, 
    fontSize: 60,
    textAlign: 'center',
    marginLeft: 10,
  },
});
