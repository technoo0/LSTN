import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import BackGround from '../components/BackGround';
import BackArrowSvg from '../svgs/BackArrow';
import CodeInput from "../components/CodeInput"
function CodeScreen({ navigation }: { navigation: any }) {
    return (
        <BackGround>

            <View className='top-12 left-5 z-10'>

                <TouchableOpacity
                    className=''
                    onPress={() => navigation.goBack()}
                >
                    <BackArrowSvg />
                </TouchableOpacity>
            </View>

            <View className='pt-32 pl-5'>
                <Text className='text-text-primary text-4xl ' >Verification code</Text>
            </View>


            <View className='mt-20 justify-center items-center'>
                {/* <TextInput className='text-text-primary text-2xl   w-11/12' keyboardType="numeric" /> */}
                <CodeInput />
            </View>

        </BackGround>
    );
}
export default CodeScreen