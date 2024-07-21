import { Stack, Link } from "expo-router";
import { SignedIn, SignedOut, useUser, ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { Text, View } from "react-native";
import Login from "./Screens/LoginScreen/Login";
import * as SecureStore from 'expo-secure-store';

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_dXByaWdodC1qZW5uZXQtNDIuY2xlcmsuYWNjb3VudHMuZGV2JA"
const publishableKey = EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

export default function RootLayout() {

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
        
      </ClerkLoaded>
    </ClerkProvider>
    
  );
}
