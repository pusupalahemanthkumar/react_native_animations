import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import {Easing} from "react-native-reanimated";

// steps to do :
// 1. npm install  react-native-reanimated
// 2. npm install moti
// 3. add this ` plugins: ['react-native-reanimated/plugin'], ` in babel.config.js file
const _color = "#6E01EF";
const _size = 100;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index) => {
          return (
            <MotiView
              from={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type:'timing',
                duration:2000,
                easing:Easing.out(Easing.ease),
                repeatReverse:false, // true by default
                delay: index*400,
                loop:true,
              }}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
              key={index}
            />
          );
        })}

        <Feather name="phone-outgoing" size={32} color="#fff" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
