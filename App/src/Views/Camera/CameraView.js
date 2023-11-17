import React, { 
  useEffect, 
  useState,
  useRef,
  forwardRef,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  useWindowDimensions
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Camera as EXCamera } from 'expo-camera';
import Toast from 'react-native-toast-message';
import Animated, {
  withSequence,
  withRepeat,
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  interpolate,
  runOnJS,
} from "react-native-reanimated";

import FlashOnButton from '../../Buttons/FlashOnButton.js';
import FlashOffButton from '../../Buttons/FlashOffButton.js';
import FlashAutoButton from '../../Buttons/FlashAutoButton.js';

const EXCameraView = forwardRef(function CamCap(props, ref) {
  const [zoom, setZoom] = React.useState(0);
  const [flash, setFlash] = useState(null);
  const [camera, setCamera] = useState(null);

  const SIZE = 28;
  const FLASH_COLOUR = "rgba(255, 255, 255, 0.63)";
  const TIME = 150;
  const savedScale = useSharedValue(1);
  const scaleShared = useSharedValue(1);
  const fadeX = useSharedValue(0);

  const { type } = props;
  const { height } = useWindowDimensions();

  const handlePress = () => {
    fadeX.value = withSequence(
      withTiming(0.63, { duation: TIME / 2 }),
      withRepeat(withTiming(1, { duration: TIME }), 5, true),
      withTiming(0, { dutation: TIME / 2 })
    );
  };

  const flashButton = () => {
    if (flash) {
      setFlash(false);
    } else if (flash===false) {
      setFlash(null);
    } else {
      setFlash(true);
    }
    handlePress();
    return
  };

  const pinchGesture = Gesture.Pinch()
    .onUpdate(({ scale }) => {
      const interpolated = interpolate(
        scale * Math.max(savedScale.value, 1),
        [1, 5],
        [0, 1],
        {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        },
      );
      scaleShared.value = scale;
      runOnJS(setZoom)(interpolated);
    })
    .onEnd(({ scale }) => {
      savedScale.value = scaleShared.value;
    });

  return (
    <GestureDetector gesture={pinchGesture}>
      <EXCamera
        style={{ flex: 1, height: height }}
        type={type}
        zoom={zoom}
        flashMode={flash ? 'on' : flash===null ? 'auto' : 'off'}
        ref={ref}
      >
      {//===============================================
        flash===true
        ? <>
        <View style={styles.styleProp}>
          <FlashOnButton 
            size={SIZE} 
            colour={FLASH_COLOUR}
            onPress={flashButton}
         />
        </View>
        <Animated.Text 
          style={[ styles.flashers, { opacity: fadeX } ]}
        >
          FLASH ON
        </Animated.Text>
        </>
      : flash===null 
        ? <>
          <View style={styles.styleProp}>
            <FlashAutoButton 
              size={SIZE} 
              colour={FLASH_COLOUR}
              onPress={flashButton} 
             />
          </View>

          <Animated.Text
            style={[ styles.flashers, { opacity: fadeX } ]}
          >
            FLASH AUTO
          </Animated.Text>
        </>
        : <> 
            <View style={styles.styleProp}>
              <FlashOffButton
                size={SIZE} 
                colour={FLASH_COLOUR}
                onPress={flashButton} 
              />
             </View>
             <Animated.Text 
               style={[ styles.flashers, { opacity: fadeX } ]}
             >
              FLASH OFF
             </Animated.Text>
          </>
          //==============================================
          }
        </EXCamera>
      </GestureDetector>
  );
});

export default EXCameraView;

const styles = StyleSheet.create({
  flashers: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 'auto',
    marginTop: -40
  },
  styleProp: {
    padding: 15,
    paddingRight: 18,
    flexDirection: 'column',
    alignItems: "flex-end"
  },
});
