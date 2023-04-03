import { Button, View, Text, Image, TouchableOpacity } from 'react-native';

import BackGround from '../components/BackGround';
import GoogleAuthBotton from '../components/Auth/GoogleAuthBotton';
import AppleAuthButton from '../components/Auth/AppleAuthButton';
import FaceBookAuthButton from '../components/Auth/FaceBookAuthButton';
import { SafeAreaView } from 'react-native-safe-area-context';





function HomeScreen({ navigation }: { navigation: any }) {


    return (

        <BackGround>

            <SafeAreaView className="flex-1 items-center justify-between my-6">
                <Image source={require("../imgs/app-simple-logo.png")} resizeMode="cover" className='w-[266px] h-[325px]' />
                <View className=''>

                    <AppleAuthButton navigation={navigation} />

                    <GoogleAuthBotton navigation={navigation} />

                    <FaceBookAuthButton navigation={navigation} />

                    <TouchableOpacity
                        className="bg-primary w-72 py-3 rounded-3xl items-center "
                        onPress={() => navigation.navigate('Email')}
                    >
                        <Text className='text-black text-md'>Continue with Email</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </BackGround>

    );
}

export default HomeScreen

