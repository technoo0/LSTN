import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackGround from '../components/BackGround'
import { LogOut } from '../utils/Auth'
import useStore from '../store'
import { SafeAreaView } from 'react-native-safe-area-context'
import Api, { getheaders } from '../utils/Api'
import GearSvg from '../svgs/GearSvg'
import HomeLogoSvg from '../svgs/HomeLogoSvg'
import HearingSvg from '../svgs/HearingSvg'
export default function HomeScreen({ navigation }) {
    useEffect(() => {
        console.log("user", useStore.getState().user)
    })
    const HandelLogOut = async () => {
        await LogOut()
        navigation.navigate('Welcome')
    }
    const HandelGetSong = async () => {
        const headers = await getheaders()
        const CuttrntSong = await Api.get("/user/getCurrentSong", {
            headers: headers
        })
        console.log("Cuttrnt Song", CuttrntSong.data)
    }
    const HandelTopSong = async () => {
        const headers = await getheaders()
        const CuttrntSong = await Api.get("/user/getTopSong", {
            headers: headers
        })
        console.log("Cuttrnt Song", CuttrntSong.data)
    }

    return (
        <BackGround>
            <SafeAreaView className='flex-1'>
                <View className='left-4'>
                    <TouchableOpacity>
                        <GearSvg />
                    </TouchableOpacity>
                </View>
                <View className='flex-1 justify-center items-center mb-20'>
                    <View className='flex-row'>
                        <HearingSvg />
                        <Text className='text-[#DDD9D9] text-xl ml-2 mb-4'>Tap to start listening</Text>
                    </View>
                    <TouchableOpacity>

                        <HomeLogoSvg />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </BackGround>
    )
}