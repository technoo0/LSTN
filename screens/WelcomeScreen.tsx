import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackGround from '../components/BackGround';


function HomeScreen({ navigation }: { navigation: any }) {
    return (

        <BackGround>

            <SafeAreaView className="flex-1 items-center justify-between">
                <Text className='text-white text-lg'>Hear the music that surround you</Text>
                <Image source={require("../imgs/app-simple-logo.png")} resizeMode="cover" className='w-[266px] h-[325px]' />
                <TouchableOpacity
                    className="bg-primary w-72 py-4 rounded-3xl items-center  mb-4"
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text className='text-black text-md'>Get Started</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </BackGround>

    );
}

export default HomeScreen

