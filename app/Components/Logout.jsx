import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Button } from 'react-native'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Logout() {
    const { isLoaded, signOut } = useAuth()

    if (!isLoaded) {
        return null
    }
    return (
        <View>
            <TouchableOpacity onPress={() => signOut()} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 30, paddingHorizontal: 50 }} >
                <Ionicons name={"log-out"} size={44} color={Colors.PRIMARY} />
                <Text style={{ fontFamily: 'outfit-regular', fontSize: 15 }} >Logout</Text>
            </TouchableOpacity>
        </View>
    )
}