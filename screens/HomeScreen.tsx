import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackGround from '../components/BackGround'
import { LogOut } from '../utils/Auth'
import useStore from '../store'
export default function HomeScreen() {
    useEffect(() => {
        console.log("user", useStore.getState().user)
    })

    return (
        <BackGround>
            <View className='flex-1 justify-center items-center'>

                <Text>HomeScreen</Text>
                <Button title='log out' onPress={LogOut} />
            </View>
        </BackGround>
    )
}