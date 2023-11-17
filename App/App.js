import { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
  Dimensions,
  useWindowDimensions
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import Animated, {
  PinwheelIn,
  LightSpeedInRight,
  FadeInUp,
  FadeOutUp,
  FadeOut,
  useSharedValue,
} from "react-native-reanimated";
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import Toast from 'react-native-toast-message';
import { 
  GestureDetector, 
  Gesture,
  GestureHandlerRootView,
  Directions
} from 'react-native-gesture-handler';
import * as ScreenOrientation from 'expo-screen-orientation';

import FullDeck from './src/Views/ButtonTemplate/FullDeck.js';
import FullDeckRight from './src/Views/ButtonTemplate/FullDeckRight.js';
import FullSnap from './src/Views/ButtonTemplate/FullSnap.js';
import FullSnapRight from './src/Views/ButtonTemplate/FullSnapRight.js';
import ButtonTemplate from './src/Views/ButtonTemplate/ButtonTemplateRight.js';
import HeaderView from './src/Views/Header.js';
import InfoView from './src/Views/InfoViews/Info.js';
import NoCameraPermissionView from './src/Views/Camera/NoCameraPermission.js';
import CameraView from './src/Views/Camera/CameraView.js';

import messageGenerator from './src/functions/messageGenerator.js';
import colourGenerator from './src/functions/colourGenerator.js';

import Circle from './src/Buttons/CircleView.js';
import ExitButton from './src/Buttons/ExitButton.js';
import FlipButton from './src/Buttons/FlipButton.js';
import SaveButton from './src/Buttons/SaveButton.js';
import ShareButton from './src/Buttons/ShareButton.js';
import ImageButton from './src/Buttons/ImagesButton.js';
import EnterAni from './src/Views/Pictures/EnterAni.js';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const bsLevelColourArr = [];
const mediaPermissionCounter = [1];

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================

export default function Add({ navigation }) {
  const imageRef = useRef();

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [imageTaken, setImageTake] = useState(false);
  const [image, setImage] = useState(null);
  const [modalClick, setModalClick] = useState(false);
  const [orientation, setOrientation] = useState(1);

  const [permission, requestCameraPermission] = Camera.useCameraPermissions();
  const [status, requestPermission] = MediaLibrary.usePermissions();  

  const COLOUR = 'white';
  const BACKGROUND_COLOUR = '#232b2b';
  const SIZE = 30;

  const { height, width } = useWindowDimensions();

  // ================================================================
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
  // ➡️  FUNCTIONS
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImageUri(data.uri);
      setImageTake(true);
    }
  };

  const pickImage = async () => {
    const permissionsMessage = "Media permissions required to access this feature.";
    const pathMessage = "To enable, go to Settings > Privacy > Camera"
    if (status === null) {
      MediaLibrary.requestPermissionsAsync();
      if (mediaPermissionCounter.length >= 2) {
        alert(permissionsMessage + pathMessage)
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setImageTake(true);
    }
  };

  const backToCamera = () => {
    setImageTake(false);
    ScreenOrientation.unlockAsync();
  };

  const modalClickOn = () => {
    setModalClick(true);
  };
  
  const modalClickOff = () => {
    setModalClick(false);
  };

  useEffect(() => {
    ScreenOrientation.unlockAsync();
    const getOrientation = async () => {
      let orient = await ScreenOrientation.getOrientationAsync();
      setOrientation(orient);
    };
    getOrientation();
    ScreenOrientation.addOrientationChangeListener(getOrientation);

    Camera.requestCameraPermissionsAsync();
    const getPermissions = async () => {
      let check = await Camera.getCameraPermissionsAsync();
      requestCameraPermission(check);
    };
    getPermissions();
  }, [])

  const button = {
    padding: 60,
    font: 45,
  }

  // ===============================================================
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ===============================================================

  // =================
  // ➡️  RETURN SCREENS
  // =================

  if (modalClick) {
  // ❓ MODAL CLICK
    return  (
      <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
        <InfoView onPress={modalClickOff} />
      </Animated.View>
    )
  }

  // =================
  // 🛑 ✋ PERMISSIONS
  // =================
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  else {

    // ➡️  FUNCTIONS
    if (!permission) {

      return (<View 
        style={{ 
          backgroundColor: BACKGROUND_COLOUR,
          width: width,
          height: height
        }} 
      />)

    } else if (!permission.granted) {

      const unButton = () => {
        Toast.show({
          type: 'error',
          text1: '❌ ACCESS DENIED',
          text2: 'You must grant access to your camera in order to use this function'
        }) 
      }

      const noPermissionProps={
        BACKGROUND_COLOUR: BACKGROUND_COLOUR,
        COLOUR: 'grey',
        SIZE: SIZE,
        button: button,
        pickImage: pickImage,
        takePicture: unButton,
        toggleCameraType: unButton
      }


      // ➡️  RETURN
      return (
        <View style={styles.container}>
          <HeaderView 
            backgroundColor={BACKGROUND_COLOUR} 
            onPress={modalClickOn} 
          />
            <NoCameraPermissionView />
          <FullSnap props={noPermissionProps} />
          <Toast />
        </View>
       );

    // =========
    // 📷 CAMERA 
    // =========   
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    } else {

      // ➡️  FUNCTIONS
      if (!imageTaken) {
        const toggleCameraType = () => {
          setType(current => (current === CameraType.back
            ? CameraType.front 
            : CameraType.back
          ));
        }
 
      const propsForCamera = {
        BACKGROUND_COLOUR: BACKGROUND_COLOUR,
        COLOUR: COLOUR,
        SIZE: SIZE,
        button: button,
        pickImage: pickImage,
        takePicture: takePicture,
        toggleCameraType: toggleCameraType
      };

      // ➡️  RETURN
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <View 
          style={[
            orientation === 1 && styles.container,
            //styles.viewWrapper,  
            { 
              flexDirection: orientation !== 1 ? 'row' : 'column', 
              backgroundColor: BACKGROUND_COLOUR 
            }
          ]}
        >
        {orientation !== 3
          ? <HeaderView 
              backgroundColor={BACKGROUND_COLOUR} 
              onPress={modalClickOn} 
              style={[ orientation !== 1 && styles.headerViewLeft, { flex: 1 } ]}
              orientation={orientation}
            />
          
          : (
              <>
                <FullSnapRight props={propsForCamera} />
                <View style={styles.buttonBorder} />
              </>
            )
        }
        <View 
          style={[
            orientation === 1
              ? styles.imageContainerContainerPortrait
              : styles.imageContainerContainerLandscape,
            orientation === 4
              ? styles.imageContainerContainerLeft
              : orientation === 3
                && styles.imageContainerContainerRight,
            { flex: 1 }
          ]}
          >
            <View 
              style={[
                orientation !== 1
                  ? styles.cameraContainer
                  : styles.imageContainer,
                orientation !== 1 
                  ? { flexDirection: 'row' }
                  : { flexDirection: 'column' },
            ]}>
              <CameraView
                type={type}
                size={SIZE}
                ref={(ref) => setCamera(ref)}
                style={{ flex: 1 }}
              />
              </View> 
          </View>
          {orientation === 4
            // for some reason the styling doesn't render here ...
            // unless its part of its own seperate view
              ? (
                  <>
                    <View style={styles.buttonBorder} />
                    <FullSnapRight props={propsForCamera} style={{ zIndex: 1 }} />
                  </>
                )
            : orientation === 3 
              ? <HeaderView 
                  style={styles.headerViewLeft} 
                  backgroundColor={BACKGROUND_COLOUR}
                  onPress={modalClick}
                  orientation={orientation}
                />
              : <FullSnap props={propsForCamera} />
          } 
        </View>
        <Toast />
      </GestureHandlerRootView>
    )
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      } else if (imageTaken===true) {
      // 🩻 IMAGE

        // ➡️  FUNCTIONS
        // Very rarely, the {message} variable might be undefined.
        // It's so rare that it probably doesn't matter.
        // But with these backups, it will be EVEN MORE rare...
        // ... to the point that an undefined display message becomes effectively impossible
        // Better to be safe than sorry ¯\_(ツ)_/¯
        let randomNumber =  Math.floor(Math.random() * 100);
        let randomNumberBackup = Math.floor(Math.random() * 101);
        let randomNumberBackup2 = Math.floor(Math.random() * 100);

        let message = messageGenerator(randomNumber);
        let messageBackup = messageGenerator(randomNumberBackup);
        let messageBackup2 = messageGenerator(randomNumberBackup2);

        let bsColour = colourGenerator(randomNumber);
        let bsColourBackup = colourGenerator(randomNumberBackup);
        let bsColourBackup2 = colourGenerator(randomNumberBackup2);

        let percentageMessage = `${randomNumber}% BULL$--T`;
        let percentageMessageBackup =  `${randomNumberBackup}% BULL$--T`;
        let percentageMessageBackup2 = `${randomNumberBackup2}% BULL$--T`;

        const onSaveImage = async () => {
          try {
            const localUri = await captureRef(imageRef, {
              height: 440,
              quality: 1,
            });

            await MediaLibrary.saveToLibraryAsync(localUri);
            if (localUri) {
              Toast.show({
                type: 'success',
                text1: '✅ IMAGE SAVED',
                text2: 'This image can now be found in your camera roll'
              })
            };
          } catch (e) {
            console.log(e);
            Toast.show({
              type: 'error',
              text1: '❌ IMAGE NOT SAVED',
              text2: 'Please check your permissions and try again'
            })
          }
        }

        const onShareAsync = async () => {
          try {
            const localUri = await captureRef(imageRef, {
              height: 440,
              quality: 1,
            });

            const shareAvailable = await Sharing.isAvailableAsync();
            if (shareAvailable) {
              Sharing.shareAsync(localUri);
            } else {
              Toast.show({
                type: 'error',
                text1: '❌ SHARING NOT AVAILABLE',
                text2: 'Please check your permissions and try again'
              })

            }
          } catch (e) {
            Toast.show({
              type: 'error',
              text1: '❌ ERROR CAPTURING SCREEN',
              text2: 'If this issue persists, consider filing a bug report'
            })
          } 
        }


        const propsForImage = {
          BACKGROUND_COLOUR: BACKGROUND_COLOUR,
          SIZE: SIZE,
          COLOUR: COLOUR,
          button: button,
          backToImage: backToCamera,
          onSaveImage: onSaveImage,
          onShareAsync: onShareAsync,
          imageUri: imageUri
        };

        // ➡️  RETURN
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        return  (
          <View 
            style={[
              orientation === 1 && styles.container,
              styles.viewWrapper,  
              { 
                flexDirection: orientation !== 1 ? 'row' : 'column', 
                backgroundColor: BACKGROUND_COLOUR
              }
            ]}
          >
          {orientation !== 3
            ? <HeaderView 
                backgroundColor={BACKGROUND_COLOUR} 
                onPress={modalClickOn} 
                style={[ 
                  orientation !== 1 && styles.headerViewLeft,
                  { flex: 1 } 
                ]}
              />
              : (
                  <>
                    <FullDeckRight props={propsForImage} />
                    <View style={styles.buttonBorder} />
                  </>
                )
          }
            <View 
              style={[
                orientation === 1
                  ? styles.imageContainerContainerPortrait
                  : styles.imageContainerContainerLandscape,
                orientation === 4
                  ? styles.imageContainerContainerLeft
                  : orientation === 3
                    && styles.imageContainerContainerRight,
                { flex: 1, borderBottomWidth: 0, overflow: 'hidden' }
              ]}
            >
              <View 
                //ref={ref} 
                style={[
                  styles.imageContainer, 
                ]}
                ref={imageRef}
              >
                {imageUri &&
                  <Image
                    source={{ uri: imageUri }} 
                    style={{ flex: 1 }} 
                  />
                }
                <View style={styles.bsWatermarkContainer}>
                  <EnterAni
                    textContent={
                      message !== undefined
                        ? percentageMessage
                        : messageBackup !== undefined
                          ? percentageMessageBackup
                          : percentageMessageBackup2
                    }
                    aniType={[PinwheelIn]}
                    styling={[ 
                      styles.bsWatermark,
                      message !== undefined
                        ? { textShadowColor: bsColour }
                        : messageBackup !== undefined
                          ? { textShadowColor: bsColourBackup }
                          : { textShadowColor: bsColourBackup2 }
                    ]}
                  />
                </View>
                <Animated.View
                  style={[ 
                    styles.bsLabelContainer,
                    message !== undefined
                      ? { backgroundColor: bsColour }
                      : messageBackup !== undefined
                        ? { backgroundColor: bsColourBackup }
                        : { backgroundColor: bsColourBackup2 }
                  ]}
                  entering={LightSpeedInRight.delay(600)}
                >
                  <ScrollView>
                    <Text style={styles.bsLabel}>
                      {
                        message !== undefined 
                        ? message 
                        : messageBackup !== undefined
                          ? messageBackup
                          : messageBackup2
                      }
                    </Text>
                  </ScrollView>
                </Animated.View>
              </View>
            </View>
            {
              orientation === 4
                ? (
                    <>
                      <View style={styles.buttonBorder} />
                      <FullDeckRight props={propsForImage} />
                    </>
                  )
                : orientation === 3
                  ? <HeaderView style={styles.headerViewLeft} />
                  : <FullDeck props={propsForImage} />
            }
            <Toast />
          </View> 
        )
      }
    }
  }
}

// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingTop: 0,
    marginTop: 0,
  },
  imageContainerContainerPortrait: {
    flex: 1,
    borderTopWidth: 5,
    borderTopColor: 'white',
  },
  imageContainerContainerLandscape: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: '100%',
  },
  imageContainerContainerLeft: {
    borderLeftWidth: 5,
    borderLeftColor: 'white',
    flex: 1
  },
  imageContainerContainerRight: {
    borderRightWidth: 5,
    borderRightColor: 'white',
    flex: 3
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
  headerViewLeft: {
    marginLeft: 0,
    height: '100%'
  },
  viewWrapper: {
    zIndex: 0, 
    flexWrap: 'wrap', 
  },
  cameraContainer: {
    height: '100%', 
    width: '100%',
    zIndex: 1, 
    flex: 2, 
    flexWrap: 'wrap', 
  },
  buttonBorder: {
    width: 5,
    height: '100%',
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
    zIndex: 0
  }
});
