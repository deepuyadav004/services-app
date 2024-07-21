import { Text, View } from "react-native";
import Login from './Screens/LoginScreen/Login'
import { Stack, Link } from "expo-router";
import { SignedIn, SignedOut, useUser, ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";

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
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>

      <SignedOut> 
        <Login />
      </SignedOut>
    </>
  );
}
