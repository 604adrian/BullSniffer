import { View, Text, StyleSheet } from 'react-native';

export default function QuestionOne() {
  const title = "What is this place? Where am I?";
  const appName = "BULL SNIFFER";

  return (
    <View>
      <Text style={styles.bold}>{title}</Text>
        <Text style={styles.standard}>
          Have no fear, friendly app user: you are using the <Text style={[styles.italic, { fontSize: 15, fontWeight: 'bold' }]}>BULL SNIFFER </Text> and it is nothing to be afraid of.
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
