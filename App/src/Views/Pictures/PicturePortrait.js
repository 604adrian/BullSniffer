import React, { 
  useEffect, 
  useState,
  useRef,
  forwardRef,
  ScrollView
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Animated, {
  PinwheelIn,
  LightSpeedInRight,
  FadeInUp,
  FadeOutUp,
  FadeOut,
  useSharedValue,
} from "react-native-reanimated";

import HeaderView from '../Header/Header.js';
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate.js';
import SaveButton from '../../Buttons/SaveButton.js';
import ExitButton from '../../Buttons/ExitButton.js';
import ShareButton from '../../Buttons/ShareButton.js';
import InfoView from '../../Views/InfoViews/Info.js';
import EnterAni from './EnterAni.js';

const PicturePortView = () => {
  return (
    <View style={styles.container}>
      <HeaderView 
        backgroundColor={props._BACKGROUND_COLOUR} 
        onPress={props.modalClickOn} 
      />
      <View style={styles.imageContainerContainer}>
        <View 
          //ref={ref} 
          style={[
            styles.imageContainer, 
            { borderBottomWidth: 0, overflow: 'hidden' }
          ]}
        >
          {/*
            imageUri &&
            <Image
              source={{ uri: imageUri }} 
              style={[
                { flex: 1 }, 
              ]} 
            />
          */}
          <View style={styles.bsWatermarkContainer}>
            <EnterAni
              textContent={props._percentageMessage}
              aniType={[PinwheelIn]}
              styling={[ {textShadowColor: props._bsColour}, styles.bsWatermark ]}
            />
          </View>
          <Animated.View
            style={[ {backgroundColor: props._bsColour}, styles.bsLabelContainer ]}
            entering={LightSpeedInRight.delay(600)}
          >
            <ScrollView>
              <Text style={styles.bsLabel}>
                {props._message}
              </Text>
            </ScrollView>
          </Animated.View>
        </View>
      </View>
      <ButtonTemplate backgroundColor={props._BACKGROUND_COLOUR}>
        <ExitButton 
          style={styles.button} 
          exitFunction={props.backToCamera} 
          size={props._SIZE} 
          colour={props._COLOUR} 
        />
        <SaveButton
          colour={props._COLOUR} 
          onPress={props.onSaveImage} 
        />
        <ShareButton 
          style={styles.button} 
          colour={props._COLOUR} 
          size={props._SIZE} 
          onPress={props.onShareAsync} 
        />
      </ButtonTemplate>
    </View>
  )
};

export default PicturePortView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingTop: 0,
    marginTop: 0,
  },
  imageContainerContainer: {
    flex: 1,
    borderTopWidth: 5,
    borderTopColor: 'white',
  },
  imageContainerContainerLeft: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: '100%',
    borderLeftWidth: 5,
    borderLeftColor: 'white',
  },
  imageContainerContainerRight: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: '100%',
    borderRightWidth: 5,
    borderRightColor: 'white',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 0,
    marginTop: 0,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  button: {
    padding: 60,
    font: 45,
  },
  bsWatermarkContainer: {
    backgroundColor: 'transparent',
    marginTop: -350,
    padding: 20,
  },
  bsWatermark: {
    color: 'white',
    opacity: 0.7,
    fontSize: 40,
    backgroundColor: 'transparent',
    textAlign: 'center',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    fontWeight: 'bold',
    transform: [{rotate: '-45deg'}],
    marginBottom: 85,
  },
  bsLabelContainer: {
    opacity: 0.7,
    marginTop: 50,
  },
  bsLabel: {
    color: 'white',
    textAlign: 'center',
    fontSize: 21,
    padding: 15,
    opacity: 1,
    textShadowColor: '#000',
    fontWeight: 'bold',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  flashers: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '85%',
  },
  styleProp: {
    padding: 15,
    paddingRight: 18,
    flexDirection: 'column',
    alignItems: "flex-end"
  },
});
