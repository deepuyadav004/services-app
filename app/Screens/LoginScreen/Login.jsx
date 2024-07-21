import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });  

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Text>Login</Text>

      <View style={styles.subContainer}>
        <Text style={{fontSize: 27, color: Colors.WHITE, textAlign: 'center'}} >
          Let's find <Text style={{fontWeight: 'bold'}} >professional cleanings and repair</Text> services.
        </Text>

        <Text style={{fontSize: 17, color: Colors.WHITE, textAlign: 'center', marginTop: 20}}>
          Best app to find servies near you which delivers you a professional services.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{fontSize: 17, color: Colors.PRIMARY, textAlign: 'center'}} >Let's get strted</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    button: {
      padding: 15,
      backgroundColor: Colors.WHITE,
      borderRadius: 99,
      marginTop: 30
    }
})

export default Login