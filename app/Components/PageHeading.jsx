import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PageHeading({ item }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => navigation.pop()}
        >
            <Ionicons name="arrow-back" size={30} color={'black'} />
            <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }} >{item}</Text>
        </TouchableOpacity>
    )
}