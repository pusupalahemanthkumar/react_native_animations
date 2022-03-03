import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

// steps to do :
// 1. npm install  react-native-reanimated
// 2. npm install moti
// 3. add this ` plugins: ['react-native-reanimated/plugin'], ` in babel.config.js file

const LoadingIndicator = ({ size }) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth:0,
        shadowOpacity:0.5,
        // elevation:1,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size/10,
        shadowOpacity:1,
        // elevation:5,
      }}
      transition={{
        type: "timing",
        duration: 1000,
        repeat: Infinity, // or loop : true
        // repeatReverse: false,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: "#fff",
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        //  elevation:10,
      }}
    />
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <LoadingIndicator size={100} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010100",
    alignItems: "center",
    justifyContent: "center",
  },
});
