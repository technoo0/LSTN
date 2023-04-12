import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import SpotifySvg from '../svgs/SpotifySvg';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { SPOTIFYID, BaseURL } from '@env';
import Api, { getheaders } from '../utils/Api';
import querystring from "query-string"
export default function SpotifyButton2({ navigation }) {
    const url = Linking.useURL();
    const GetGetTockens = async (code: string) => {
        const headers = await getheaders()
        const res = await Api.post("/spotify/savetoken", {
            code
        }, {
            headers
        })

        if (res.data.msg == "OK") {
            navigation.navigate("Home")
        }

    }

    if (url) {
        const { queryParams } = Linking.parse(url);

        queryParams

        if (typeof queryParams.code == 'string') {
            console.log("yayyyyyy")
            GetGetTockens(queryParams.code)

        }

    }

    const HandelPress = async () => {
        // const headers = await getheaders()

        // const res = await Api.get("/spotify/code", {
        //     headers
        // })
        // console.log("gay")
        // Linking.openURL(res.data.url)

        // console.log(Linking.createURL("/"))
        var scope = 'user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state streaming user-read-email user-read-private';
        const link = 'https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: SPOTIFYID,
                scope: scope,
                redirect_uri: Linking.createURL("/"),

            })
        Linking.openURL(link)


    }
    return (
        <View className="">
            <TouchableOpacity
                className="bg-[#1DB954] w-72 py-3 rounded-3xl items-center flex-row justify-center"
                onPress={() => {
                    HandelPress()
                }}
            >
                <SpotifySvg />
                <Text className='text-black text-lg pl-2'>Connect your Spotify</Text>
            </TouchableOpacity>
        </View>
    )
}