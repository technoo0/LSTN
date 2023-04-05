import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackGround from '../components/BackGround'
import { LogOut } from '../utils/Auth'
import useStore from '../store'
import { SafeAreaView } from 'react-native-safe-area-context'
import SpotifyButtom from '../components/SpotifyButton'

export default function LinkMusicApp({ navigation }) {
    useEffect(() => {
        // console.log("user", useStore.getState().user)
    })


    return (
        <BackGround>
            <SafeAreaView className='flex-1 justify-center items-center'>


                <SpotifyButtom navigation={navigation} />
            </SafeAreaView>
        </BackGround>
    )
}