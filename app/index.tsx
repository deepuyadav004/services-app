import Login from './Screens/LoginScreen/Login'
import { SignedIn, SignedOut, useUser, ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigations from './Navigations/TabNavigations'

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_dXByaWdodC1qZW5uZXQtNDIuY2xlcmsuYWNjb3VudHMuZGV2JA"
const publishableKey = EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}


export default function Index() {
  const { user } = useUser();

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
