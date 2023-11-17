import { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import * as Linking from 'expo-linking';

export default function NoCameraPermissionView() {
  const space = ' ';
  const goToPermissions = () => {
    Linking.openSettings();
  }

  // ➡️  RETURN
  return (
    <View style={styles.imageContainerContainer}>
      <View style={styles.imageContainer}>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>
            {'\n\n'}
            {'\n\n'}
            We need your permission to show the camera.
            {'\n\n'}
            To enable camera permissions, go to 
            <Text style={{ fontStyle: 'italic', color: 'white' }}>
              {`${space}`} Settings > Bull Sniffer > Allow camera access
              {'\n\n'}
              {'\n\n'}
            </Text>
          </Text>
          <Button 
            onPress={goToPermissions} 
            title="Open settings" 
          />
        </View>
      </View>
    </View>
   )
}

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
  imageContainer: {
    flex: 1,
    paddingTop: 0,
    marginTop: 0,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
});

