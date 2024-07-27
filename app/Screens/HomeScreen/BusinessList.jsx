import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import fetchBusinessList from '../../../APIs/businessListData';
import Header from '@/app/Components/Header';
import BusinessListSmall from './BusinessListSmall'

export default function BusinessList() {
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        fetchBusinessList().then(res => {
            setData(res?.businessLists);
        })
        // console.log("data: ", data)
    }, []);


  return (
    <View>
      <Header text={"Latest Business"} viewAll={false} />

        <FlatList 
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <View style={{marginRight: 10}} >
                    <BusinessListSmall data={item} />
                </View>
            )}
        />
   
    </View>
  )
}