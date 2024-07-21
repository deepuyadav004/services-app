import Login from './Screens/LoginScreen/Login'
import { SignedIn, SignedOut, useUser, ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigations from './Navigations/TabNavigations'
import { useFonts } from 'expo-font';

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_dXByaWdodC1qZW5uZXQtNDIuY2xlcmsuYWNjb3VudHMuZGV2JA"
const publishableKey = EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}


export default function Index() {
  const { user } = useUser();
  const [loaded, error] = useFonts({
    // 'outfit-regular': require('../assets/fonts/Outfit-VariableFont_wght.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-regular': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });
 
  return (
    <>
      <SignedIn>
        <NavigationContainer independent={true} >
          <TabNavigations />
        </NavigationContainer>
      </SignedIn>

      <SignedOut> 
        <Login />
      </SignedOut>
    </>
  );
}
