import { View, Text, Button, TextInput, TouchableOpacity, TouchableOpacityBase, Modal } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BackGround from '../components/BackGround'
import moment from 'moment'
import AddImage from '../svgs/AddImage'
import DatePicker from 'react-native-modern-datepicker';
export default function UserInfoScreen({ route, navigation }: { route: any, navigation: any }) {
    const [selectedDate, setSelectedDate] = useState('');
    const [openDate, setOpenDate] = useState(false)
    // const { user } = route.params;

    const FormateDate = (newDate: string) => {

        return moment(newDate, "YYYY/MM/DD").format("MM/DD/YYYY")
    }

    const HandelDateChange = (date) => {
        setSelectedDate(date)
        setOpenDate(false)
    }
    useEffect(() => {

        // console.log("new User Data:", user)
    })

    return (
        <BackGround>
            <View className='flex-1 py-32 items-center justify-between'>
                <TouchableOpacity>

                    <AddImage />
                </TouchableOpacity>
                <View className='w-full px-5' >
                    <View className='mb-2'>

                        <Text className='text-slate-300 text-base mb-2 '>Name</Text>
                        <TextInput className={`text-text-primary text-xl   p-2 pb-3 border-[1px] border-primary rounded-lg `}
                            placeholder="Enter your name"
                            keyboardType='email-address'
                        // onChangeText={(text) => SetEmail(text)}
                        // value={Email}
                        />
                    </View>

                    <View>

                        <Text className='text-slate-300 text-base mb-2'>Birthday</Text>
                        <TouchableOpacity className={`p-2 border-[1px] border-primary rounded-lg `} onPress={() => setOpenDate(true)}>
                            {selectedDate ? <Text className='text-white text-xl'>{FormateDate(selectedDate)}</Text> : <Text className='text-slate-300 text-xl'>MM/DD/YY</Text>}

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
                </View>
                <View className='items-center'>

                    <TouchableOpacity
                        className="bg-primary w-72 py-3 rounded-3xl items-center "
                    // onPress={CountinueFunction}
                    >
                        <Text className='text-text-primary text-xl'>Continue</Text>
                    </TouchableOpacity>
                </View>



            </View>
        </BackGround>
    )
}