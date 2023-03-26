import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import BackGround from '../components/BackGround';
import BackArrowSvg from '../svgs/BackArrow';
import validator from 'validator';
import { useState } from 'react';
import Api from '../utils/Api';

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

            <View className='top-12 left-5 z-10'>

                <TouchableOpacity
                    className=''
                    onPress={() => navigation.goBack()}
                >
                    <BackArrowSvg />
                </TouchableOpacity>
            </View>

            <View className='pt-32 pl-5'>
                <Text className='text-text-primary text-4xl ' >My email is</Text>
            </View>


            <View className='pt-32 pl-5'>
                <TextInput className={`text-text-primary text-2xl ${Error ? "border-red-500" : "border-white"}   pb-2 border-b-[1px] w-11/12`}
                    placeholder="coolPerson@life.com"
                    keyboardType='email-address'
                    onChangeText={(text) => SetEmail(text)}
                    value={Email} />
            </View>

            <View className='flex-1 justify-center items-center' >
                <TouchableOpacity
                    className="bg-primary w-72 py-3 rounded-3xl items-center "
                    onPress={CountinueFunction}
                >
                    <Text className='text-text-primary text-xl'>Continue</Text>
                </TouchableOpacity>
            </View>
        </BackGround>
    );
}
export default EmailScreen