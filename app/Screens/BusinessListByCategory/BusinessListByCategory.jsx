import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import fetchBusinessListByCategory from '../../../APIs/businessListByCategory'
import BusinessListItem from './BusinessListItem'
import PageHeading from '../../Components/PageHeading'


export default function BusinessListByCategory() {
    const navigation = useNavigation();
    const param = useRoute().params;
    const [data, setData] = useState();


    useEffect(() => {
        fetchBusinessListByCategory(param?.category).then(res => {
            setData(res?.businessLists);
        })
        // console.log("param: ", param)
    }, [])

    return (
        <View style={{ padding: 20, paddingTop: 30 }} >
            <PageHeading item={param?.category} />
            {data && data.length > 0 ?
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (<BusinessListItem data={item} />)}
                    style={{ marginTop: 20 }}
                />
                : <Text style={{fontFamily: 'outfit-regular', fontSize: 20, textAlign: 'center', marginTop: '20%'}} >No business found</Text>}
        </View>
    )
}