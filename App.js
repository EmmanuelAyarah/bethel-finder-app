import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

SplashScreen.preventAutoHideAsync();



export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'ubuntusans': require('./assets/fonts/UbuntuSans-Bold.ttf'),
    'ubuntusans-medium': require('./assets/fonts/UbuntuSans-Regular.ttf'),
    'ubuntusans-bold': require('./assets/fonts/UbuntuSans-SemiBold.ttf'),
    
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ClerkProvider publishableKey={pk_test_Z29sZGVuLXBhbnRoZXItNTMuY2xlcmsuYWNjb3VudHMuZGV2}>
    <View style={styles.container}>
    <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <LoginScreen/>
        </SignedOut>
    
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:25,
  },
});
