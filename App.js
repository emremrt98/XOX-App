import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/home/shared/Footer.jsx';
import CreatedBy from './components/home/shared/CreatedBy.jsx';
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Pacifico': require('./assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }
  return (
    <View style={styles.container}>
      <HomeScreen />
      <Footer />
      <CreatedBy />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15AABF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
