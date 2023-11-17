import { View, Text, StyleSheet } from 'react-native';

export default function HowTo() {
  const title = "How do I use this app?";
  const appName = "BULL SNIFFER";
  const space = ' ';

  const features = [
    {
      id: '🤏 PINCH TO ZOOM',
      theFeature: 'Any budding photographer may occasionally wish to zoom their camera in or out (in order to make the contents of their camera preview bigger or smaller, respectively). And bull sniffing photographers are no different. That is why the camera preview in this app uses a pinch-to-zoom functionality. In other words: when using the camera, you can zoom in or out by pinching or unpinching the camera preview on your screen. Pinch wisely and have fun.'
    },
    {
      id: '↩️  REFRESH SCAN',
      theFeature: "Bull sniffing is not an exact science; sometimes the results of a bull-scan will be inaccurate. So, if you want to rescan an image, you can simply rotate your phone to refresh the results. (For example: if your phone is in portrait mode, you can refresh the scan by rotating your screen over to landscape mode.) This feature will not work if your phone's orientation lock is on."
    }
  ]

  return (
    <View>
      <Text style={styles.bold}>{title}</Text>
        <Text style={styles.standard}>
          Navigating the <Text style={[styles.italic, { fontSize: 15, fontWeight: 'bold' }]}>BULL SNIFFER </Text> should be fairly intuitive. That said, the app does have some semi-hidden features that might not be immediately observable. These features are catalogued below.
          {'\n\n'}
          <View>
        {features.map((feature) => {
          return (
            <Text key={feature.id} style={{ color: 'white' }}>
              {feature.id !== "🤏 PINCH TO ZOOM" && '\n'}
              <Text style={[ styles.bold, { fontSize: 20 } ]}>
                {feature.id}
              </Text>
              {space, space}
              {'\n'}
              <Text style={styles.standard}>
                {feature.theFeature}
              </Text>
            </Text>
          )
        })}
      </View>
      </Text>
      <Text>{'\n'}</Text>
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
  bold: {fontWeight: 'bold', fontSize: 30, color: 'white' },
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  standard: { color: 'white', fontSize: 20 }
})
