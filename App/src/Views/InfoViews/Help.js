import { View, Text, StyleSheet } from 'react-native';

export default function Help() {
  const title = "What is this place? Where am I?";
  const appName = "BULL SNIFFER";

  return (
    <View>
      <Text style={styles.bold}>
        But what is the <Text style={[styles.italic, { fontSize: 25 }]}> BULL SNIFFER</Text>?
      </Text>
      <Text style={styles.standard}>
        Good question. The <Text style={[styles.italic, { fontSize: 15, fontWeight: 'bold' }]}>{appName}</Text> is an app that will allow you to detect bull with ease: simply put your phone camera up to a suspected source of B.S., and the <Text style={[styles.italic, { fontSize: 15, fontWeight: 'bold' }]}>{appName}</Text> will tell you how much bull can be detected in your immediate vicinity. Please see fine print for more details.
      {'\n'} 
      </Text>
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
