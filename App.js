import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useState } from 'react';

export default function App() {
  const [startAnim, setStartAnim] = useState(false);

  return (
    <View style={[styles.container, styles.debug]}>
      <ScrollView>
        <Animatable.Image animation={startAnim ? "fadeInLeft" : ""} duration={2000} source={require("./assets/banner1.jpeg")} style={[{ width: 300, height: 150, marginVertical: 20 }, styles.debug]} resizeMode="cover"></Animatable.Image>

        <Animatable.Image animation={startAnim ? "zoomIn" : ""} duration={2000} source={require("./assets/banner2.jpeg")} style={[{ width: 300, height: 150, marginVertical: 20 }, styles.debug]} resizeMode="cover"></Animatable.Image>

        <Animatable.Image animation={startAnim ? "bounceIn" : ""} duration={2000} source={require("./assets/banner3.jpg")} style={[{ width: 300, height: 150, marginVertical: 20 }, styles.debug]} resizeMode="cover"></Animatable.Image>

        <Pressable onPress={() => setStartAnim(true)}
          style={{
            width: 300,
            height: 64,
            borderRadius: 20,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10
          }}>
          <Text style={{ color: "white" }}>Start Animations</Text>
        </Pressable>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  // debug: {
  //   borderColor: "black",
  //   backgroundColor: "grey",
  //   borderWidth: 5,
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 60,
  },

});
