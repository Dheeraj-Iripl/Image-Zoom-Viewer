import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const images = [
  { url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png' }
]
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
      }}>
        <ImageViewer imageUrls={images} style={{ width: 300, height: 300 }} footerContainerStyle={{ height: 20 }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageDiv: {
    height: windowHeight,
    width: "100%",
  },

});
