import { View, Text, Button, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import BackGround from '../components/BackGround';
import BackArrowSvg from '../svgs/BackArrow';
import CodeInput from "../components/CodeInput"
import { useEffect, useState } from 'react';
import Api from '../utils/Api';
import useStore from '../store';
import { HandelNewUser, Login } from '../utils/Auth';
function CodeScreen({ route, navigation }: { route: any, navigation: any }) {
    const { email } = route.params;
    const [lodding, setLodding] = useState(false)
    const [error, setError] = useState(false)
    const [value, setValue] = useState('')
    const checkCode = async () => {
        setLodding(true)
        const res = await Api.post("/auth/code", {
            email: email,
            code: value
        })
        console.log(res.data)
        if (res.data.msg == "wrong_code") {
            setLodding(false)
            setError(true)
        } else if (res.data.msg == "newUser") {
            console.log("new User")
            const user = await HandelNewUser(res.data.jwt)

            navigation.navigate("UserInfo", {
                user,
            })
        } else if (res.data.msg == "login") {
            console.log("login")
            await Login(res.data.jwt)
            navigation.navigate("Home")
        }
    }
    useEffect(() => {
        if (value.length == 5) {
            console.log(value)
            checkCode()

        }
    }, [value])
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
                <CodeInput value={value} setValue={setValue} error={error} />
            </View>


            {lodding && <ActivityIndicator className='mt-10' size="large" color="#814783"></ActivityIndicator>}

        </BackGround>
    );
}
export default CodeScreen