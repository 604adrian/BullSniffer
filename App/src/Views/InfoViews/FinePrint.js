import { View, Text, StyleSheet } from 'react-native';

export default function FinePrintView() {
  const appName = "BULL SNIFFER";
  const space = " "
  const features = [
    {
      id: "📏",
      warning: "This app is not meant to be used as a measurment tool of any kind"
      
    },
    {
      id:'🤡',
      warning: "the results of this app are totally random and meant primarily to be funny"
    },
    {
      id: '🪦',
      warning: "do not use this app to insinuate that any person living or dead is or ever was full of $--t"  
    },
    {
      id: '😠',
      warning: 'do not use this app to be mean'
    },
    {
      id: '🎛️',
      warning: 'do not use this app while operating heavy machinery'
    },
    {
      id: '🚘',
      warning: 'do not use this app while operating a motor vehicle'
    },
    {
      id: '🤠',
      warning: 'do not use this app to make important career decisions'
    },
    {
      id: '💘',
      warning: 'do not use this app to make important decisions in your personal life',

    },
    {
      id: '🛸',
      warning: 'do not use this app to start a multi-decade U.A.P. crash-retrival and reverse-engineering program'
    },
    {
      id: '🏫',
      warning: 'when in doubt: most B.S. comes from the man'
    },
    {
      id: '👊',
      warning: 'stick it to the man'
    },
    {
      id: '🛐',
      warning: 'love thy neighbour as theyself'
    },
    {
      id: '🩻',
      warning: "this app is not a replacement for the advice of a qualified medical professional"
    },
    {
      id: '🎇',
      warning: 'the end'
    }
  ]


  return(
    <View style={{
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 15,
      padding: 10,
      marginBottom: 20,
    }}>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
        }}>
        Here is the fine print: <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
            THIS APP DOES NOT <Text style={styles.italic}> LITERALLY </Text>DETECT BULLS💩T.
          </Text>
      
        {'\n\n'}
        There are two primary reasons for this.
        {'\n\n'}
        ➡️  For one, 🐮💩 is not a physical property that can be detected by scientific instruments.
        {'\n\n'}
        ➡️  Second, even if something like a 🐮💩 detector could exist, such a detector is not built into the hardware of most modern smartphones.
        {'\n\n'}
        So, unfortunately, creating an actual 🐮💩 detector is not technologically feasible at present. Because of this, the <Text style={[styles.italic, { fontSize: 12, fontWeight: 'bold' }]}>{appName}</Text> does not literally detect 🐮💩. The app itself is, in fact, 🐮💩. Hopefully breakthroughs in science will one day remedy this sad state of affairs.
        {'\n\n'}
        But until that day comes, some features will be in order, which are as follows:
        {'\n\n'}
      <View
        style={{
          padding: 20,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
          borderLeftWidth: 3,
          borderLeftColor: 'white'
        }}>
        {features.map((feature) => {
          return (
            <Text key={feature.id} style={{ color: 'white', fontSize: 12 }}>
              {feature.id !== "📏" && '\n'}
              {feature.id}
              {space, space}
              <Text style={[ styles.italic, { fontWeight: 'bold' } ]}>
                {feature.warning.toUpperCase()}
              </Text>
            </Text>
          )
        })}
      </View>
        {'\n\n'}
        So that's the tea. As long as you can stick to the rules, then using this app should be smooth sailing for you, dear user.
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
  bold: {fontWeight: 'bold', fontSize: 30},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  standard: { color: 'white', fontSize: 20 }
})
