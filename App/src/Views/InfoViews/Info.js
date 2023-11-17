import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LightSpeedInRight, LightSpeedOutLeft } from 'react-native-reanimated';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';

import HeaderView from './Header.js';
import QuestionOne from './Q1.js';
import FinePrintView from './FinePrint.js';
import HowTo from './HowTo.js';
import Help from './Help.js';

export default function InfoView({ onPress }) {
  const [showFinePrint, setShowFinePrint] = useState(false);

  const backgroundColor = '#232b2b'
  const appName = "BULL SNIFFER";
  const toggleFinePrint = () => {
    return showFinePrint ? setShowFinePrint(false) : setShowFinePrint(true)
  }
  
  return (
    <View>
      <HeaderView backgroundColor={backgroundColor} onPress={onPress} />
      <ScrollView style={{ backgroundColor: backgroundColor, height: '100%' }}>
        <View style={{ padding: 50, paddingTop: 50, paddingBottom: 20 }}>

          <QuestionOne />
          <HowTo />
          <Help />

          <TouchableOpacity onPress={toggleFinePrint}>
            {showFinePrint ? (
              <Text>
                <FontAwesome5 
                  name="angle-down" 
                  size={24} 
                  color="white" 
                />
                <Text 
                  style={[styles.standard, { fontWeight: 'bold' }]}
                >  Hide fine print{'\n'}</Text>
              </Text>
              ) : (
              <Text>
                <FontAwesome5 
                  name="angle-right" 
                  size={24} 
                  color="white" 
                />
                <Text 
                  style={[styles.standard, { fontWeight: 'bold' }]}
                >  See fine print...{'\n'}</Text>
              </Text>
            )}
          </TouchableOpacity>

          {showFinePrint && <FinePrintView />}

        </View>
        <Text style={{ marginBottom: 40 }}>{'\n\n\n\n\n'}</Text>
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    borderWidth: 3,
    borderColor: 'white',
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  bold: {fontWeight: 'bold', fontSize: 30, color: 'white'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  standard: { color: 'white', fontSize: 20 }
})
