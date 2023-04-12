import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CloseUser } from "../types/data"
import Api, { getheaders } from '../utils/Api'
import PlaySvg from '../svgs/PlaySvg'
import moment from 'moment'
import LikeSvg from '../svgs/LikeSvg'
import { GetLikeStauts, SendLikeTo, UnLikeUser } from '../utils/Like'
import LikedSvg from '../svgs/LikedSvg'
import { Audio } from 'expo-av';
type props = {
    data: CloseUser
}

export default function UserCard({ data }: props) {
    const [expanded, setExpanded] = useState(false)
    const [soundplaying, setSoundplaying] = useState(false);
    const [sound, setSound] = useState<Audio.Sound | null>(null)
    const [liked, setLiked] = useState(false)
    const UpdateLike = async () => {

        const result = await GetLikeStauts(data.user.id)
        setLiked(result)
    }

    useEffect(() => {
        if (expanded) {
            UpdateLike()
        }
    }, [expanded])
    const userAge = (birthday: Date) => {
        const currentDate = moment();
        const userBirthday = moment(birthday, 'YYYY-MM-DD');
        const userAge = currentDate.diff(userBirthday, 'years');
        return userAge
    }
    const sendLike = async () => {
        if (!liked) {

            const result = await SendLikeTo(data.user.id)
            if (result.msg == "OK") {
                setLiked(true)
            } else {
                alert("An Error has Occurred")
            }
        } else {
            const result = await UnLikeUser(data.user.id)
            if (result.msg == "OK") {
                setLiked(false)
            } else {
                alert("An Error has Occurred")
            }
        }
    }
    const playSound = async () => {
        const sound = new Audio.Sound()
        setSound(sound)
        await sound.loadAsync({
            uri: data.song.link
        })

        await sound.playAsync()
    }
    const handelPlayPress = async () => {
        if (!soundplaying) {
            setSoundplaying(true)
            await playSound()
        } else {
            setSoundplaying(false)
            sound.stopAsync()
        }

    }
    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const Handelclick = async () => {
        setExpanded(!expanded)
    }


    return (
        <TouchableOpacity onPress={Handelclick}>
            <View className='w-max bg-white rounded-xl p-3 ' >
                <View className='w-max flex-row'>

                    <View className='w-20 h-20'>
                        {!expanded && <Image source={{ uri: data.song.songImage }} className="h-14 w-14 rounded-full" />}
                        <Image source={{ uri: data.user.profileImage }} className={!expanded ? 'absolute  h-14 w-14 rounded-full left-6 top-6 ' : "h-20 w-20 rounded-full"} />
                    </View>
                    <View className='flex-grow'>
                        <View className='w-max flex-row justify-between items-center pr-2'>
                            <Text className='text-black text-lg ml-2'>{data.user.name}{expanded && ", " + userAge(data.user.birthdate)}</Text>
                            {expanded && <Text className='text-gray-600'>{String(Math.round(data.distance)) + " miles"}</Text>}
                        </View>
                        {expanded && <Text className='text-gray-600 ml-2'>{'"' + data.user.bio + '"'}</Text>}
                        {!expanded && <Text className='text-black text-md ml-2'>{data.song.artist + "- " + data.song.songName}</Text>}
                        {!expanded && <View className=' items-end mr-4 mt-3'>
                            <Text className='text-gray-600'>{String(Math.round(data.distance)) + " miles"}</Text>
                        </View>}
                        {expanded && <View className=' items-end mr-4 mt-3'>
                            <TouchableOpacity onPress={sendLike}>
                                {!liked ? <LikeSvg /> : <LikedSvg />}
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>
                {expanded && <View className='w-max mt-3'>
                    <Text className='text-gray-600 ml-2 mb-3'>{data.user.name} Currently Listening To</Text>
                    <View className='w-max flex-row'>

                        <TouchableOpacity className='w-24 justify-center items-center' onPress={handelPlayPress}>
                            <Image source={{ uri: data.song.songImage }} className={"h-24 w-24 rounded-full"} />
                            <PlaySvg className="absolute" />
                        </TouchableOpacity>
                        <View className='justify-center ml-3'>
                            <Text className='text-xl'>{data.song.songName}</Text>
                            <Text>{data.song.artist}</Text>
                        </View>

                    </View>


                </View>}
            </View>

        </TouchableOpacity>
    )
}