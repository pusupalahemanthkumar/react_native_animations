import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// steps to do :
// 1. npm install  react-native-reanimated
// 2. npm install moti
// 3. add this ` plugins: ['react-native-reanimated/plugin'], ` in babel.config.js file

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Animation</Text>
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
  title:{
    fontSize:20,
  }
});
