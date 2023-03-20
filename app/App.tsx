import { useFonts } from 'expo-font';
import { Main } from './src/Main';
import { StatusBar } from 'react-native';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
  });

  if(!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
      <Main/>
    </>
  );
}
