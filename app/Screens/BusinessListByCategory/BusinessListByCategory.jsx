import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import fetchBusinessListByCategory from '../../../APIs/businessListByCategory'
import BusinessListItem from './BusinessListItem'


export default function BusinessListByCategory() {
    const navigation = useNavigation();
    const param = useRoute().params;
    const [data, setData] = useState();


    useEffect(() => {
        fetchBusinessListByCategory(param?.category).then(res => {
            setData(res?.businessLists);
        })
        console.log("param: ", param)
    }, [])

    return (
        <View style={{ padding: 20, paddingTop: 30 }} >
            <TouchableOpacity style={{display: 'flex', flexDirection:'row', alignItems:'center', gap:10}}
                onPress={() => navigation.pop()}
            >
                <Ionicons name="arrow-back" size={30} color={'black'} />
                <Text style={{fontSize: 25, fontFamily: 'outfit-medium'}} >{param?.category}</Text>
            </TouchableOpacity>

            <FlatList 
                data={data}
                renderItem={({item, index}) => (<BusinessListItem data={data} />)}
            />

        </View>
    )
}