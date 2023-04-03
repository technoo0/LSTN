import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackGround from '../components/BackGround'
import { LogOut } from '../utils/Auth'
import useStore from '../store'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function HomeScreen({ navigation }) {
    useEffect(() => {
        console.log("user", useStore.getState().user)
    })
    const HandelLogOut = async () => {
        await LogOut()
        navigation.navigate('Welcome')
    }

    return (
        <BackGround>
            <SafeAreaView className='flex-1 justify-center items-center'>

                <Text>HomeScreen</Text>
                <Button title='log out' onPress={HandelLogOut} />
            </SafeAreaView>
        </BackGround>
    )
}