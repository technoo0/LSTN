import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import BackGround from '../components/BackGround';


function HomeScreen({ navigation }: { navigation: any }) {
    return (

        <BackGround>

            <View className="flex-1 items-center justify-center gap-36  ">
                <Text className='text-white text-lg'>Hear the music that surround you</Text>
                <Image source={require("../imgs/app-simple-logo.png")} resizeMode="cover" className='w-[266px] h-[325px]' />
                <TouchableOpacity
                    className="bg-primary w-72 py-4 rounded-3xl items-center "
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text className='text-black text-md'>Get Started</Text>
                </TouchableOpacity>
            </View>
        </BackGround>

    );
}

export default HomeScreen

