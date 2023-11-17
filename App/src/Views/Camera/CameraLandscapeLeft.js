import React, { 
  useEffect, 
  useState,
  useRef,
  forwardRef
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  StatusBar
} from 'react-native';

import SaveButton from '../../Buttons/SaveButton.js';
import ExitButton from '../../Buttons/ExitButton.js';
import ShareButton from '../../Buttons/ShareButton.js';
import InfoView from '../../Views/InfoViews/Info.js';

const PictureLandscapeLeft = forwardRef(function PicLeft(props, ref) {
return (
  <View 
    style={{ 
      flexDirection: 'row', 
      zIndex: -1, 
      flexWrap: 'wrap', 
      backgroundColor: BACKGROUND_COLOUR 
    }}
  >
    <HeaderViewLeft 
      backgroundColor={BACKGROUND_COLOUR} 
      onPress={modalClickOn} 
      style={{ 
        zIndex: 1, 
        flex: 1,
      }}
    />
    <View 
      style={[
        styles.imageContainerContainerLeft,
        {
          flex: 2,
          zIndex: 1,
          flexWrap: 'wrap',
          flexDirection: 'column'
        }
      ]}
    >
      <View 
        ref={imageRef} 
        style={[
          styles.imageContainer, 
          { 
            borderBottomWidth: 0, 
            overflow: 'hidden',
            zIndex: 0,
            flex: 1,

          }
        ]}
      >
        {imageUri &&
          <Image 
            source={{ uri: imageUri }} 
            style={[
              { flex: 2 }, 
            ]} 
          />
        }
        <View style={[
                styles.bsWatermarkContainer,
                {
                  flex: 2,
                  zIndex: 1
                }
              ]}>
          <EnterAni
            textContent={percentageMessage}
            aniType={[PinwheelIn]}
            styling={[ {textShadowColor: bsColour}, styles.bsWatermark ]}
          />
        </View>
        <Animated.View
          style={[ 
            {
              backgroundColor: bsColour,
              zIndex: 1, 
              flex: 3,
              flexWrap: 'wrap',
              flexDirection: 'column'
            }, 
            styles.bsLabelContainer 
          ]}
          entering={LightSpeedInRight.delay(600)}
        >
          <ScrollView>
            <Text style={[
                styles.bsLabel,
                {
                  flex: 1,
                  zIndex: 2
                }
              ]}>
              {message}
            </Text>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
    <ButtonTemplateLeft 
      backgroundColor={BACKGROUND_COLOUR}
      style={{ flex: 3, zIndex: 1 }}
    >
      <ExitButton 
        style={styles.button} 
        exitFunction={backToCamera} 
        size={SIZE} 
        colour={COLOUR} 
      />
      <SaveButton
        colour={COLOUR} 
        onPress={onSaveImage} 
      />
      <ShareButton 
        style={styles.button} 
        colour={COLOUR} 
        size={SIZE} 
        onPress={onShareAsync} 
      />
    </ButtonTemplateLeft>
    <Toast />
  </View>
  )
});

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

