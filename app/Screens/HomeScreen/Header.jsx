import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../../constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Header = () => {
    const {user, isLoading} = useUser();

  return user && (
    <View style={styles.container }>
        <View style={styles.profileMainContainer} >
            <View style={styles.profileContainer} >
                <Image source={{uri: user?.imageUrl}} style={styles.userImage} />
                <View>
                    <Text style={{color: Colors.WHITE, fontSize: 15}} >Welcome, </Text>
                    <Text style={{color: Colors.WHITE, fontSize: 20}} >{user?.fullName }</Text>
                </View>
            </View>
            <FontAwesome name="bookmark" size={24} color="white" />
        </View>

        {/* Search bar */}
        <View style={styles.searchBarContainer} >
            <TextInput 
                placeholder='search'
                style={styles.textInput}
            />
            <FontAwesome style={styles.searchBtn} name="search" size={24} color="black" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 50
    },
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%' ,
        fontSize: 16
    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    searchBtn: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    }
})

export default Header