import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import GoogleSvg from '../../svgs/GoogleSvg';

import { EXPOCLIENTID, IOSCLIENTISD } from "@env"

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useState, useEffect } from 'react';
import Api from '../../utils/Api';
WebBrowser.maybeCompleteAuthSession();

export default function GoogleAuthBotton() {

    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: EXPOCLIENTID,
        iosClientId: IOSCLIENTISD,

    });


    useEffect(() => {
        if (response?.type === "success") {
            if (response.authentication) {

                setToken(response.authentication.accessToken);

                getUserInfo();

            }
        }
    }, [response, token]);

    const getUserInfo = async () => {
        try {
            if (token) {
                console.log(token)
                const res = await Api.post('/auth/google', {
                    token
                })
                console.log(res.data)
            }
            // const response = await fetch(
            //     "https://www.googleapis.com/userinfo/v2/me",
            //     {
            //         headers: { Authorization: `Bearer ${token}` },
            //     }
            // );

            // const user = await response.json();
            // setUserInfo(user);
            // console.log(user)
        } catch (error) {
            // Add your own error handler here
        }
    }
    return (
        <View className='justify-center items-center mb-2' >

            <TouchableOpacity
                className="bg-gray-200 w-72 py-3 rounded-3xl items-center flex-row justify-center"
                onPress={() => promptAsync()}
            >

                <GoogleSvg />

                <Text className='text-black text-md pl-2'>Continue with Google</Text>
            </TouchableOpacity>
        </View>
    )
}