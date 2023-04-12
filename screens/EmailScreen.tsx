import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import BackGround from '../components/BackGround';
import BackArrowSvg from '../svgs/BackArrow';
import validator from 'validator';
import { useState } from 'react';
import Api from '../utils/Api';
import { SafeAreaView } from 'react-native-safe-area-context';

function EmailScreen({ navigation }: { navigation: any }) {
    const [Error, SetError] = useState(false)
    const [Email, SetEmail] = useState('')
    const sendEmail = async () => {
        const res = await Api.post("/auth/email", {
            email: Email
        })
        console.log(res.data)
    }
    const CountinueFunction = () => {
        //validate the email
        const vaild = validator.isEmail(Email)
        if (vaild) {
            SetError(false)
            sendEmail()
            navigation.navigate('Code', {
                email: Email
            })
        } else {
            SetError(true)
        }
    }
    return (
        <BackGround>
            <SafeAreaView className='flex-1'>
                <View className='ml-3 mb-10'>

                    <TouchableOpacity
                        className=''
                        onPress={() => navigation.goBack()}
                    >
                        <BackArrowSvg />
                    </TouchableOpacity>
                </View>

                <View className='flex-1 justify-between'>

                    <View>

                        <Text className='text-text-primary text-4xl mb-20 ml-3 ' >My email is</Text>


                        <View className='w-full items-center px-3'>
                            <TextInput className={`text-text-primary text-2xl ${Error ? "border-red-500" : "border-gray-200"}   pb-2 border-b-[1px] w-full `}

                                placeholder="coolPerson@life.com"
                                keyboardType='email-address'
                                onChangeText={(text) => SetEmail(text)}
                                value={Email} />
                        </View>
                    </View>

                    <View className='w-full items-center mb-10'>

                        <TouchableOpacity
                            className="bg-primary w-72 py-3 rounded-3xl items-center "
                            onPress={CountinueFunction}
                        >
                            <Text className='text-text-primary text-xl'>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </SafeAreaView>
        </BackGround>
    );
}
export default EmailScreen