import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackGround from '../components/BackGround';


function SplashScreen() {
    return (

        <BackGround>

            <SafeAreaView className="flex-1 items-center justify-center">

                <Image source={require("../imgs/app-simple-logo.png")} resizeMode="cover" className='w-[266px] h-[325px]' />
                <ActivityIndicator className='mt-10' size="large" color="#814783"></ActivityIndicator>
            </SafeAreaView>
        </BackGround>

    );
}

export default SplashScreen

