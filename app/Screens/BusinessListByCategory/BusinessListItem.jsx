import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function BusinessListItem({data}) {
  return (
    <View>
        {console.log(data)}
        <Image source={{uri: data?.images?.[0].url}} style={styles.imageStyle} />
        {console.log("Image URL: ", data?.images)}
      <Text>BusinessListItem</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100
    }
})