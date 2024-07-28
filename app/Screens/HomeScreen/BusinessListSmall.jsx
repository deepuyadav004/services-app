import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useNavigation } from '@react-navigation/native'

export default function BusinessListSmall({ data }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.push('business-detail', {data:data})} style={styles.container} >
            {data && data.images && <Image source={{ uri: data?.images[0]?.url }} style={styles.imageStyle} />}
            <View style={styles.infoContainer} >
                <Text style={{ fontSize: 17, fontFamily: 'outfit-medium' }} >{data?.name}</Text>
                <Text style={{ fontSize: 13, fontFamily: 'outfit-small', color: Colors.GREY }} >{data?.contactPerson}</Text>
                {/* <Text style={{ fontSize: 10, fontFamily: 'outfit-small', padding: 3, color: Colors.PRIMARY, backgroundColor: Colors.PRIMARY_LIGHT, borderRadius: 3, alignSelf: 'flex-start', paddingHorizontal: 7 }} >{data?.category?.[0].name}</Text> */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 160,
        height: 100,
        borderRadius: 10
    },
    container: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.WHITE
    },
    infoContainer: {
        padding: 7,
        display: 'flex',
        gap: 3
    }
})