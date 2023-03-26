import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import BackGround from '../components/BackGround';


function SplashScreen() {
    return (

        <BackGround>

            <View className="flex-1 items-center justify-center gap-36  ">

                <Image source={require("../imgs/app-simple-logo.png")} resizeMode="cover" className='w-[266px] h-[325px]' />
                <ActivityIndicator className='mt-10' size="large" color="#814783"></ActivityIndicator>
            </View>
        </BackGround>

    );
}

export default SplashScreen

