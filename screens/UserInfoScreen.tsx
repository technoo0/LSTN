import { View, Text, Button, TextInput, TouchableOpacity, Modal, Image, Platform, ActivityIndicator, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BackGround from '../components/BackGround'
import moment from 'moment'
import AddImage from '../svgs/AddImage'
import DatePicker from 'react-native-modern-datepicker';
import * as ImagePicker from 'expo-image-picker';
import useUserDataForm, { checkForm } from '../hooks/useUserDataForm'
import Api, { getheaders } from '../utils/Api'

export default function UserInfoScreen({ route, navigation }: { route: any, navigation: any }) {
    const { user } = route.params;

    const [selectedDate, setSelectedDate] = useState('');
    const [openDate, setOpenDate] = useState(false)
    const [image, setImage] = useState(null);
    const [Errors, SetErrors] = useState([])
    const [loading, setLoading] = useState(false)


    const { values, HandelDataChange } = useUserDataForm({
        name: user.name || "",
        birthday: new Date(),
        bio: user.bio || "",
        image: user.profileImage || "",
    })


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            // console.log(result.assets[0].fileName)
            // console.log(result.assets[0].uri)
            let imageUri = result.assets[0] ? `data:image/jpg;base64,${result.assets[0].base64}` : null;
            HandelDataChange({ name: "image", value: imageUri })
            // console.log({ uri: imageUri.slice(0, 100) });
            // const data = await fetchImageFromUri(result.assets[0].uri)

        }
    };


    const FormateDate = (newDate: string) => {
        return moment(newDate, "YYYY/MM/DD").format("MM/DD/YYYY")
    }

    const HandelDateChange = (date) => {
        setSelectedDate(date)
        setOpenDate(false)
        HandelDataChange({ name: "birthday", value: moment(date, "YYYY/MM/DD").toDate() })

    }

    useEffect(() => {

        setImage(user.profileImage)
        // console.log("profile photi", user.profileImage)
        HandelDataChange({ name: "image", value: user.profileImage })
        if (user.name) {

            HandelDataChange({ name: "name", value: String(user.name) })
        }

        if (user.bio) {

            HandelDataChange({ name: "bio", value: user.bio })
        }
        if (user.birthdate) {

            HandelDataChange({ name: "birthday", value: user.birthdate })
            setSelectedDate(moment(user.birthdate).format("YYYY/MM/DD"))
        }

        // console.log(user)
    }, [])



    const HandelSubmit = async () => {

        if (!loading) {
            // console.log(values)
            setLoading(true)
            const check_res = checkForm(values)
            SetErrors(check_res.Errors)
            if (check_res.status) {
                // console.log("good to goooooo")
                const headers = await getheaders()
                const res = await Api.post("/user/newUserdata", {
                    ...values
                }, {
                    headers: headers
                })
                // console.log(res.data)
                if (res.data.msg == "OK") {
                    navigation.navigate('MusicApp')
                } else {
                    // console.log(res)
                    alert("an error has occurred please try again later")
                }
            } else {
                if (check_res.Errors.includes('birthday')) {
                    alert("You must be 18 or older")
                }
            }
            // console.log(check_res)
            setLoading(false)
        }

    }




    return (
        <BackGround>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <ScrollView >


                    <View className='flex-1 py-32 items-center justify-between'>

                        <TouchableOpacity onPress={pickImage}>


                            {image ? <Image source={{ uri: image }} style={{ width: 200, height: 200 }} className="rounded-full border-white border-4" /> : <AddImage />}
                        </TouchableOpacity>

                        <View className='w-full px-5' >
                            <View className='mb-2'>

                                <Text className='text-slate-200 text-base mb-2 '>Name</Text>

                                <TextInput className={`text-text-primary text-xl   p-2 pb-3 border-[1px] ${Errors.includes('name') ? 'border-red-600' : "border-primary"}  rounded-lg `}
                                    placeholder="Enter your name"
                                    keyboardType='default'
                                    onChangeText={(text) => HandelDataChange({ name: "name", value: text })}
                                    value={String(values.name)}
                                />
                            </View>

                            <View>
                                <Text className='text-slate-300 text-base mb-2'>Birthday</Text>
                                <TouchableOpacity className={`p-2 border-[1px] ${Errors.includes('birthday') ? 'border-red-600' : "border-primary"} rounded-lg `} onPress={() => setOpenDate(true)}>
                                    {selectedDate ? <Text className='text-white text-xl'>{FormateDate(selectedDate)}</Text> : <Text className='text-gray-400 text-xl'>MM/DD/YY</Text>}

                                </TouchableOpacity>


                                <Modal animationType='slide' transparent={true} visible={openDate} >
                                    <View className='flex-1 justify-center items-center p-5'>
                                        <View className='w-full p-3 rounded-lg bg-white'>

                                            <DatePicker
                                                options={{ textHeaderColor: '#FFB801', mainColor: '#FFB801', }}
                                                mode="calendar"
                                                onSelectedChange={HandelDateChange}
                                            />
                                            <TouchableOpacity className={`bg-primary rounded-3xl p-2 items-center mx-14`} onPress={() => setOpenDate(false)}>
                                                <Text className='text-white text-xl'>Close</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Modal>

                            </View>
                            <View className='mt-2'>

                                <Text className='text-slate-300 text-base mb-2 '>Bio</Text>

                                <TextInput className={`text-text-primary text-xl   p-2 pb-3 border-[1px] border-primary rounded-lg `}
                                    placeholder="Write Who You Are"
                                    keyboardType='default'
                                    onChangeText={(text) => HandelDataChange({ name: "bio", value: text })}
                                    value={String(values.bio)}
                                />
                            </View>
                        </View>

                        <View className='items-center mt-5'>

                            <TouchableOpacity
                                className="bg-primary w-72 py-3 rounded-3xl items-center "
                                onPress={HandelSubmit}
                            >
                                {!loading ? <Text className='text-text-primary text-xl'>Continue</Text> :
                                    <ActivityIndicator size="large" color="#814783"></ActivityIndicator>}
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </BackGround>
    )
}