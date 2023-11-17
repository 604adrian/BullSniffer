import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
        
const EnterAni = ({ textContent, aniType, styling }) => {
  // second & third params must always be arrays
  const aniTypeOne = aniType[0];
  return (
    <Animated.View entering={aniTypeOne}>
      <Text style={styling}>{textContent}</Text>
    </Animated.View>
  )
}

export default EnterAni;
