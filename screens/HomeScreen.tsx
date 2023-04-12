import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackGround from '../components/BackGround'
import useStore from '../store'
import { SafeAreaView } from 'react-native-safe-area-context'
import GearSvg from '../svgs/GearSvg'
import HomeLogoSvg from '../svgs/HomeLogoSvg'
import HearingSvg from '../svgs/HearingSvg'
import EllipeSvg from '../svgs/EllipeSvg'
import Animated, {
    FadeOut,
    FadeIn,
} from 'react-native-reanimated';
import CancelSvg from '../svgs/CancelSvg'
import useLocation from '../hooks/useLocation'
import { SetUserLocation } from '../utils/UserLocation'
import Api, { getheaders } from '../utils/Api'



export default function HomeScreen({ navigation }) {
    const { location, errorMsg } = useLocation()

    useEffect(() => {
        // console.log("user", useStore.getState().user)
        // console.log("user Location", location)
        if (location) {
            SetUserLocation(location.coords.latitude, location.coords.longitude)
        }
    }, [location])
    const [Searching, setSearching] = useState(false)
    const findUsers = async () => {
        const headers = await getheaders()
        const resdata = await Api.get("/user/closeUsers", {
            headers: headers
        })

        if (resdata.data.users.length > 0) {
            StopSearching()
            navigation.navigate("Result", {
                users: resdata.data.users,
            })
        } else {
            StopSearching()
            alert("Couldn't find any users around you now try again later")
        }
    }
    const StartAnimation = () => {

        setSearching(true)
        findUsers()
    }
    const StopSearching = () => {
        setSearching(false)
    }


    return (
        <BackGround>
            <SafeAreaView className='flex-1'>
                {!Searching ? <Animated.View entering={FadeIn} exiting={FadeOut} className='left-4'>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Settings')
                    }}>
                        <GearSvg />
                    </TouchableOpacity>
                </Animated.View> : <Animated.View entering={FadeIn} exiting={FadeOut} className='w-full items-end pr-4'>
                    <TouchableOpacity onPress={StopSearching}>
                        <CancelSvg />
                    </TouchableOpacity>
                </Animated.View>}

                <View className='flex-1 justify-center items-center mb-20'>
                    {!Searching ? <Animated.View entering={FadeIn} exiting={FadeOut} className='flex-row' >
                        <HearingSvg />
                        <Text className='text-[#DDD9D9] text-xl ml-2 mb-4 z-10'>Tap to start listening</Text>
                    </Animated.View> : <View className='h-7'></View>}
                    <View className='justify-center items-center'>
                        <TouchableOpacity onPress={StartAnimation} disabled={Searching}>
                            <HomeLogoSvg />
                        </TouchableOpacity>
                        {Searching && <Animated.View entering={FadeIn} className='absolute -z-10'>
                            <EllipeSvg />
                        </Animated.View>}
                    </View>
                </View>

                {Searching ? <Animated.View entering={FadeIn} exiting={FadeOut} className='w-full items-center'>
                    <Text className='text-[#DDD9D9] text-xl'>Listening Around...</Text>
                </Animated.View> : <View className='h-7'></View>}

            </SafeAreaView>
        </BackGround>
    )
}


