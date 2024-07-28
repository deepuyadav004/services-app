import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from '@/constants/Colors';
import Header from '@/app/Components/Header';

export default function BookingModel({ hideModel }) {

    const [timelist, setTimeList] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState();
    const [note, setNote] = useState('');

    useEffect(() => {
        getTimeList();
    }, [])

    const getTimeList = () => {
        const timeList = [];
        for (let i = 8; i <= 12; i++) {
            timeList.push(
                { time: i + ":00 AM" }
            )
            timeList.push(
                { time: i + ":30 AM" }
            )
        }

        for (let i = 1; i <= 7; i++) {
            timeList.push(
                { time: i + ":00 PM" }
            )
            timeList.push(
                { time: i + ":30 PM" }
            )
        }

        setTimeList(timeList)
    }

    return (
        <ScrollView style={{ padding: 20 }} >
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20 }}
                onPress={() => hideModel()}
            >
                <Ionicons name="arrow-back" size={30} color={'black'} />
                <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }} >{"Booking"}</Text>
            </TouchableOpacity>

            <Header text={"Select Date"} />
            <View style={styles.calendarContainer} >
                <CalendarPicker
                    onDateChange={() => setSelectedDate(this.onDateChange)}
                    width={300}
                    minDate={Date.now()}
                    todayBackgroundColor={Colors.BLACK}
                    todayTextStyle={{ color: Colors.WHITE }}
                    selectedDayColor={Colors.PRIMARY}
                    selectedDayTextStyle={{ color: Colors.WHITE }}
                />
            </View>

            {/* Time Selection */}
            
            <View style={{marginTop: 20}} >
                <Header text={"Select Time Slot"} />
                <FlatList 
                    data={timelist}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <TouchableOpacity style={{marginRight: 10}} onPress={() => setSelectedTime(item.time)} >
                            <Text style={ selectedTime==item.time ? styles.selectedTime : styles.unselectedTime} >{item.time}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* Note section */}
            <View style={{paddingTop: 20}} >
                <Header text={"Write note"} />
                <TextInput placeholder='Note' numberOfLines={4} multiline={true} style={styles.noteTextArea} onChange={(text) => setNote(text)} />
            </View>

            {/* Confirmation button */}
            <TouchableOpacity style={{marginTop: 15, marginBottom: 30}} >
                <Text style={styles.confirmBtn} >Confirm & Book</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    calendarContainer: {
        backgroundColor: Colors.PRIMARY_LIGHT,
        padding: 20,
        borderRadius: 15
    },
    selectedTime: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        paddingHorizontal: 18,
        color: Colors.WHITE,
        backgroundColor: Colors.PRIMARY
    },
    unselectedTime: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        paddingHorizontal: 18,
        color: Colors.PRIMARY
    },
    noteTextArea: {
        borderWidth: 1,
        borderRadius: 15,
        textAlignVertical: 'top',
        padding: 20,
        fontSize: 16,
        fontFamily: 'outfit-regular',
        borderColor: Colors.PRIMARY
    },
    confirmBtn: {
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        fontSize: 17,
        backgroundColor: Colors.PRIMARY,
        color: Colors.WHITE,
        padding: 13,
        borderRadius: 99,
        elevation: 2
    }
})